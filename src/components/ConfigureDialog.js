import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ConfigureDialog = ({ isOpen, onClose, type }) => {
  const [messageType, setMessageType] = useState('text'); // text, image, video, document
  const [isTemplate, setIsTemplate] = useState(false);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-lg">
          <div className="flex justify-between items-center p-6 border-b">
            <Dialog.Title className="text-lg font-semibold">
              Configure Welcome Message
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="messageType"
                    checked={!isTemplate}
                    onChange={() => setIsTemplate(false)}
                    className="mr-2"
                  />
                  Regular message
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="messageType"
                    checked={isTemplate}
                    onChange={() => setIsTemplate(true)}
                    className="mr-2"
                  />
                  Pre-approved template message
                </label>
              </div>

              {isTemplate ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Template Name
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>Select</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload Media File
                    </label>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Upload From Media Library
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Media URL
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="https://unsplash.com/photos/people-sitting-at-the-table-"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Values
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Variable Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={messageType === 'text'}
                        onChange={() => setMessageType('text')}
                        className="mr-2"
                      />
                      Text
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={messageType === 'image'}
                        onChange={() => setMessageType('image')}
                        className="mr-2"
                      />
                      Image
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={messageType === 'video'}
                        onChange={() => setMessageType('video')}
                        className="mr-2"
                      />
                      Video
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        checked={messageType === 'document'}
                        onChange={() => setMessageType('document')}
                        className="mr-2"
                      />
                      Document
                    </label>
                  </div>

                  {messageType === 'text' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message Body
                      </label>
                      <div className="border border-gray-300 rounded-md p-2">
                        <div className="flex space-x-2 mb-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M6 10h4v4H6v-4zm0 6h4v4H6v-4zm6-6h4v4h-4v-4zm6 0h4v4h-4v-4zm-6 6h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M4 9h16v2H4V9zm0 4h16v2H4v-2z"/>
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                              <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>
                            </svg>
                          </button>
                        </div>
                        <textarea
                          className="w-full min-h-[100px] p-2 border-0 focus:ring-0"
                          placeholder="Enter your message here"
                        />
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        0/4096
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Upload Media File
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Upload From Media Library
                          </button>
                          <div className="mt-2 text-sm text-gray-500">
                            {messageType === 'image' && 'Supported file type: .png or .jpeg'}
                            {messageType === 'video' && 'Supported file type: .mp4'}
                            {messageType === 'document' && 'Supported file type: .pdf, .docx, .xlsx'}
                            <br />
                            Maximum file size: 5 MB
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Media URL
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter media URL"
                        />
                      </div>
                      {messageType !== 'document' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message Body
                          </label>
                          <textarea
                            className="w-full min-h-[100px] p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your message here"
                          />
                          <div className="text-right text-sm text-gray-500">
                            0/4096
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 p-6 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConfigureDialog; 