import React from 'react';
import { PaperContent } from './PaperContent';

export const IPhoneMockup = () => {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="w-[375px] h-[812px] bg-black rounded-[60px] p-2 shadow-2xl">
        {/* iPhone Screen */}
        <div className="w-full h-full bg-[#0a0a0a] rounded-[50px] overflow-hidden relative">
          
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white text-sm font-medium">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white rounded-full"></div>
                <div className="w-1 h-3 bg-white/50 rounded-full"></div>
              </div>
              <svg className="w-4 h-3 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <div className="w-6 h-3 border border-white rounded-sm ml-1">
                <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* App Header */}
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-white text-xl font-bold">In60z</h1>
                <p className="text-gray-400 text-sm">Research Simplified</p>
              </div>
              <div className="w-8 h-8 bg-[#0075ff] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            <PaperContent />
          </div>
          
        </div>
      </div>
    </div>
  );
};