import React, { useState } from 'react';
import ConfigureDialog from './ConfigureDialog';

const OptInManagement = () => {
  const [isOptInDialogOpen, setIsOptInDialogOpen] = useState(false);
  const [isOptOutDialogOpen, setIsOptOutDialogOpen] = useState(false);
  const [isOptInEnabled, setIsOptInEnabled] = useState(true);
  const [isOptOutEnabled, setIsOptOutEnabled] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#1A73E8]">Opt-In Management</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">Cancel</button>
          <button className="px-4 py-2 bg-[#1A73E8] text-white rounded-md">Save</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        {/* Opt-In Section */}
        <div className="mb-12 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1A73E8]" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Opt-in</h2>
              <p className="text-gray-600">A text that explains what opt-in is</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Opt-in Response Column */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-gray-900">Opt-in Response</h3>
                  <p className="text-sm text-gray-500">Setup a response message for opt-in user keywords</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isOptInEnabled}
                    onChange={() => setIsOptInEnabled(!isOptInEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1A73E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1A73E8]"></div>
                </label>
              </div>
              <button
                onClick={() => setIsOptInDialogOpen(true)}
                className="mb-4 px-4 py-2 bg-[#1A73E8] text-white rounded-md flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Configure
              </button>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"/>
                    </svg>
                    <p className="text-gray-600">Hi! Thanks for connecting. Someone from our team will get in touch soon.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opt-in Keywords Column */}
            <div>
              <div className="mb-4">
                <h3 className="font-medium text-gray-900">Opt-in Keywords</h3>
                <p className="text-sm text-gray-500">
                  The user will have to type exactly one of these messages on which they should be automatically opted-in
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="# Add keyword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] text-gray-600 bg-white"
                />
                <div className="flex flex-wrap gap-2">
                  {['Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword'].map((keyword, index) => (
                    <span key={index} className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 flex items-center gap-2">
                      {keyword}
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opt-Out Section */}
        <div className="rounded-xl p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#E8F0FE] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1A73E8]" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Opt-out</h2>
              <p className="text-gray-600">A text that explains what opt-in is</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Opt-out Response Column */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium text-gray-900">Opt-out Response</h3>
                  <p className="text-sm text-gray-500">Setup a response message for opt-out user keywords</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isOptOutEnabled}
                    onChange={() => setIsOptOutEnabled(!isOptOutEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1A73E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1A73E8]"></div>
                </label>
              </div>
              <button
                onClick={() => setIsOptOutDialogOpen(true)}
                className="mb-4 px-4 py-2 bg-[#1A73E8] text-white rounded-md flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Configure
              </button>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 mt-1 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"/>
                    </svg>
                    <p className="text-gray-600">Hi! Thanks for connecting. Someone from our team will get in touch soon.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opt-out Keywords Column */}
            <div>
              <div className="mb-4">
                <h3 className="font-medium text-gray-900">Opt-out Keywords</h3>
                <p className="text-sm text-gray-500">
                  The user will have to type exactly one of these messages on which they should be automatically opted-out
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="# Add keyword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] text-gray-600 bg-white"
                />
                <div className="flex flex-wrap gap-2">
                  {['Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword', 'Keyword'].map((keyword, index) => (
                    <span key={index} className="px-3 py-1.5 bg-white rounded-full text-sm text-gray-700 flex items-center gap-2">
                      {keyword}
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configure Dialog */}
      <ConfigureDialog
        isOpen={isOptInDialogOpen}
        onClose={() => setIsOptInDialogOpen(false)}
        type="opt-in"
      />
      <ConfigureDialog
        isOpen={isOptOutDialogOpen}
        onClose={() => setIsOptOutDialogOpen(false)}
        type="opt-out"
      />
    </div>
  );
};

export default OptInManagement; 