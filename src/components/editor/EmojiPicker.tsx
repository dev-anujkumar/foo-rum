import React, { memo } from 'react';

interface EmojiPickerProps {
  emojis: string[];
  selectedEmoji: string;
  onEmojiSelect: (emoji: string) => void;
  className?: string;
}

const EmojiPicker: React.FC<EmojiPickerProps> = memo(({
  emojis,
  selectedEmoji,
  onEmojiSelect,
  className = ''
}) => {
  return (
    <div className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 min-w-[200px] ${className}`}>
      <div className="grid grid-cols-5 gap-2">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => onEmojiSelect(emoji)}
            className={`text-lg p-2 rounded hover:bg-gray-100 transition-colors flex items-center justify-center ${
              selectedEmoji === emoji ? 'bg-blue-100 ring-2 ring-blue-300' : ''
            }`}
            title={emoji}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
});

export default EmojiPicker;
