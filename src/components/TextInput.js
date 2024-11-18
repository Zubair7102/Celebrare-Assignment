import React, { useState } from 'react';

const TextInput = ({ onAddText }) => {
  const [text, setText] = useState('');

  const handleAddText = () => {
    if (text) {
      onAddText(text);
      setText('');
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2"
        placeholder="Enter text"
      />
      <button
        onClick={handleAddText}
        className="ml-2 bg-blue-500 text-white px-4 py-2"
      >
        Add Text
      </button>
    </div>
  );
};

export default TextInput;
