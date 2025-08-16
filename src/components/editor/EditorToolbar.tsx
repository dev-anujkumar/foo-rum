import React, { memo } from 'react';
import { TEXT } from '../../constants';
import boldIcon from '../../assets/editorIcons/text-bold.svg';
import italicIcon from '../../assets/editorIcons/text-italic.svg';
import underlineIcon from '../../assets/editorIcons/text-underline.svg';
import unorderedListIcon from '../../assets/editorIcons/list-unordered.svg';
import orderedListIcon from '../../assets/editorIcons/list-ordered.svg';
import scriptIcon from '../../assets/editorIcons/script.svg';
import quotesIcon from '../../assets/editorIcons/quotes.svg';
import trashIcon from '../../assets/icons/trash.svg';

interface EditorToolbarProps {
  onToolbarAction: (action: string) => void;
  className?: string;
}

const EditorToolbar: React.FC<EditorToolbarProps> = memo(({ 
  onToolbarAction, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center justify-between mb-1 p-1 ${className}`}>
      <div className="flex items-center space-x-4 bg-[#F4F4F4] rounded-lg p-1">
        <select className="h-8 rounded-lg focus:outline-none cursor-pointer">
          <option>{TEXT.POST_EDITOR.TOOLBAR.PARAGRAPH}</option>
        </select>
        
        <button 
          onClick={() => onToolbarAction('bold')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors font-bold"
        >
          <img src={boldIcon} alt="Bold" className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onToolbarAction('italic')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors italic"
        >
          <img src={italicIcon} alt="Italic" className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onToolbarAction('underline')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors underline"
        >
          <img src={underlineIcon} alt="Underline" className="w-4 h-4" />
        </button>
        
        <div className="w-px h-5 bg-gray-300 mx-2"></div>
        
        <button 
          onClick={() => onToolbarAction('unordered-list')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={unorderedListIcon} alt="Unordered List" className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onToolbarAction('ordered-list')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={orderedListIcon} alt="Ordered List" className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-gray-300 mx-2"></div>
        <button 
          onClick={() => onToolbarAction('quotes')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={quotesIcon} alt="Quotes" className="w-4 h-4" />
        </button>
        <button 
          onClick={() => onToolbarAction('code')}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <img src={scriptIcon} alt="Script" className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => onToolbarAction('clear')}
          className="p-3 text-red-500 hover:text-red-700 transition-colors bg-red-50 rounded"
        >
          <img src={trashIcon} alt="Trash" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});

export default EditorToolbar;
