import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiUpload, FiMic, FiAlertCircle, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ScannerComponent = () => {
  const [inputType, setInputType] = useState('url'); 
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState('en');
  const [isRecording, setIsRecording] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState(null);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setIsLoading(true);
    try {
      const endpoint = inputType === 'url' ? '/api/check-url' : '/api/check-message';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          content: inputValue,
          type: inputType,
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
      
      if (data.audioFeedback) {
        setAudioFeedback(data.audioFeedback);
        if (audioRef.current) {
          audioRef.current.src = data.audioFeedback;
          audioRef.current.play();
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({
        status: 'error',
        message: 'An error occurred while processing your request.',
        details: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await sendAudioToBackend(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setResult({
        status: 'error',
        message: 'Could not access microphone. Please check your permissions.',
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const sendAudioToBackend = async (audioBlob) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);
      formData.append('language', language);
      
      const response = await fetch('/api/check-audio', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setResult(data);
      
      if (data.transcription) {
        setInputValue(data.transcription);
      }
      
      if (data.audioFeedback) {
        setAudioFeedback(data.audioFeedback);
        if (audioRef.current) {
          audioRef.current.src = data.audioFeedback;
          audioRef.current.play();
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({
        status: 'error',
        message: 'An error occurred while processing your audio.',
        details: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('audio/')) {
      setResult({
        status: 'error',
        message: 'Please upload an audio file.',
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('audio', file);
      formData.append('language', language);
      
      const response = await fetch('/api/check-audio', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setResult(data);
      
      if (data.transcription) {
        setInputValue(data.transcription);
      }
      
      if (data.audioFeedback) {
        setAudioFeedback(data.audioFeedback);
        if (audioRef.current) {
          audioRef.current.src = data.audioFeedback;
          audioRef.current.play();
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({
        status: 'error',
        message: 'An error occurred while processing your audio file.',
        details: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = () => {
    if (!result) return '';
    switch (result.status) {
      case 'safe':
        return 'text-green-500';
      case 'suspicious':
        return 'text-yellow-500';
      case 'scam':
        return 'text-red-500';
      case 'error':
        return 'text-gray-500';
      default:
        return '';
    }
  };

  const getStatusIcon = () => {
    if (!result) return null;
    switch (result.status) {
      case 'safe':
        return <FiCheckCircle className="w-8 h-8 text-green-500" />;
      case 'suspicious':
        return <FiAlertCircle className="w-8 h-8 text-yellow-500" />;
      case 'scam':
        return <FiXCircle className="w-8 h-8 text-red-500" />;
      case 'error':
        return <FiAlertCircle className="w-8 h-8 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setInputType('url')}
            className={`flex-1 py-2 px-4 rounded-md ${
              inputType === 'url' 
                ? 'bg-[#0E0E2C] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Website URL
          </button>
          <button
            onClick={() => setInputType('text')}
            className={`flex-1 py-2 px-4 rounded-md ${
              inputType === 'text' 
                ? 'bg-[#0E0E2C] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            WhatsApp Text
          </button>
          <button
            onClick={() => setInputType('voice')}
            className={`flex-1 py-2 px-4 rounded-md ${
              inputType === 'voice' 
                ? 'bg-[#0E0E2C] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            Voice Note
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            {inputType === 'url' && (
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
                  <FiSearch className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  placeholder="Enter website URL to check..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#63C1E8]"
                />
              </div>
            )}

            {inputType === 'text' && (
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                </span>
                <textarea
                  placeholder="Paste WhatsApp message to analyze..."
                  value={inputValue}
                  onChange={handleInputChange}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#63C1E8] min-h-[100px]"
                />
              </div>
            )}

            {inputType === 'voice' && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <button 
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`flex items-center justify-center px-4 py-2 rounded-md ${
                      isRecording 
                        ? 'bg-red-500 text-white' 
                        : 'bg-[#0E0E2C] text-white'
                    }`}
                  >
                    <FiMic className="mr-2" />
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                  </button>
                  
                  <div className="flex-1 relative">
                    <input
                      type="file"
                      id="audio-upload"
                      accept="audio/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label 
                      htmlFor="audio-upload"
                      className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer"
                    >
                      <FiUpload className="mr-2" />
                      Upload Voice Note
                    </label>
                  </div>
                </div>
                
                {inputValue && (
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm text-gray-700">Transcription: {inputValue}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#63C1E8]"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
            
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading || (inputType === 'voice' && isRecording)}
              className={`bg-[#63C1E8] hover:bg-[#4BA7D0] text-white font-bold py-2 px-6 rounded-md transition-colors duration-300 ${
                !inputValue.trim() || isLoading || (inputType === 'voice' && isRecording)
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </form>
      </div>

      {result && (
        <div className="mt-6 border-t pt-4">
          <div className="flex items-start space-x-4">
            {getStatusIcon()}
            <div>
              <h3 className={`text-xl font-bold mb-2 ${getStatusColor()}`}>
                {result.status === 'safe' && 'Safe'}
                {result.status === 'suspicious' && 'Suspicious'}
                {result.status === 'scam' && 'Scam Detected'}
                {result.status === 'error' && 'Error'}
              </h3>
              <p className="text-gray-700 mb-3">{result.message}</p>
              
              {result.details && (
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <p className="font-medium mb-1">Details:</p>
                  <p className="text-gray-600">{result.details}</p>
                </div>
              )}
              
              {audioFeedback && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">Audio Feedback:</p>
                  <audio ref={audioRef} controls className="w-full">
                    <source src={audioFeedback} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScannerComponent;