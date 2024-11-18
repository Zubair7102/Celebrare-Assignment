import React, { useState } from 'react';

const FontControls = ({ onFontChange }) => {
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleFontSizeChange = (sizeChange) => {
    const newFontSize = fontSize + sizeChange;
    setFontSize(newFontSize);
    onFontChange({ fontSize: newFontSize });
  };

  const toggleBold = () => {
    const newBold = !isBold;
    setIsBold(newBold);
    onFontChange({ fontWeight: newBold ? 'bold' : 'normal' });
  };

  const toggleItalic = () => {
    const newItalic = !isItalic;
    setIsItalic(newItalic);
    onFontChange({ fontStyle: newItalic ? 'italic' : 'normal' });
  };

  const toggleUnderline = () => {
    const newUnderline = !isUnderline;
    setIsUnderline(newUnderline);
    onFontChange({ textDecoration: newUnderline ? 'underline' : 'none' });
  };

  const handleFontFamilyChange = (e) => {
    const newFontFamily = e.target.value;
    setFontFamily(newFontFamily);
    onFontChange({ fontFamily: newFontFamily });
  };

  return (
    <div className="flex items-center space-x-4 mb-4 mx-auto justify-center">
      {/* Font Family Selector */}
      <div className="flex items-center space-x-2">
        <label htmlFor="fontFamily">Font:</label>
        <select
          id="fontFamily"
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className="border px-2 py-1 rounded-md"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      {/* Font Size Controls */}
      <div className="flex items-center space-x-2 justify-between">
        <label>Size:</label>
        <input
          type="text"
          value={fontSize}
          readOnly
          className="border w-12 text-center px-2 py-1 rounded-md"
        />
        <button
          onClick={() => handleFontSizeChange(-1)}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
        >
          -
        </button>
        <button
          onClick={() => handleFontSizeChange(1)}
          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
        >
          +
        </button>
      </div>

      {/* Font Style Controls (Bold, Italic, Underline) */}
      <div className="flex space-x-2 mx-auto mt-4 ">
        <button
          onClick={toggleBold}
          className={`px-4 py-2 rounded-md ${
            isBold ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          B
        </button>
        <button
          onClick={toggleItalic}
          className={`px-4 py-2 rounded-md ${
            isItalic ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          I
        </button>
        <button
          onClick={toggleUnderline}
          className={`px-4 py-2 rounded-md ${
            isUnderline ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          U
        </button>
      </div>
    </div>
  );
};

export default FontControls;
