import React, { memo } from 'react';
import addIcon from '../../assets/icons/plus.svg';
import microphoneIcon from '../../assets/icons/mic.svg';
import cameraIcon from '../../assets/icons/video-camera.svg';
import sendIcon from '../../assets/icons/send.svg';

interface EditorFooterProps {
  onToolbarAction: (action: string) => void;
  onPublish: () => void;
  className?: string;
}

const EditorFooter: React.FC<EditorFooterProps> = memo(({
  onToolbarAction,
  onPublish,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-center border-t border-gray-200 ${className}`}>
      <div className="flex items-center space-x-3 p-1">
        <button 
          onClick={() => onToolbarAction('attachment')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors bg-white border border-gray-200 rounded-lg"
        >
          <img src={addIcon} alt="Attachment" className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onToolbarAction('microphone')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={microphoneIcon} alt="Microphone" className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onToolbarAction('camera')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={cameraIcon} alt="Camera" className="w-5 h-5" />
        </button>
      </div>
      
      <button
        onClick={onPublish}
        className="text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
      >
        <img src={sendIcon} alt="Add" className="w-4 h-4" />
      </button>
    </div>
  );
});

export default EditorFooter;
