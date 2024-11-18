import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import TextInput from '../components/TextInput';
import FontControls from '../components/FontControls';
import UndoRedo from '../components/UndoRedo';

function Home() {
  const [texts, setTexts] = useState([]);
  const [fontStyle, setFontStyle] = useState({
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
  });
  const [history, setHistory] = useState([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Function to add text to the canvas
  const handleAddText = (text) => {
    const newText = {
      id: Date.now(),
      content: text,
      x: 100,
      y: 100,
      width: 150,
      height: 50,
      fontStyle,
    };
    const newTexts = [...texts, newText];
    setTexts(newTexts);
    updateHistory(newTexts);
  };

  // Function to change font settings
  const handleFontChange = (newFontStyle) => {
    setFontStyle((prevFontStyle) => ({ ...prevFontStyle, ...newFontStyle }));
  };

  // Undo functionality
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setTexts(history[historyIndex - 1]);
    }
  };

  // Redo functionality
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setTexts(history[historyIndex + 1]);
    }
  };

  // Update history for undo/redo
  const updateHistory = (newTexts) => {
    const newHistory = [...history.slice(0, historyIndex + 1), newTexts];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Canvas App</h1>
      <div className="flex justify-between mb-4">
        
      </div>
        <UndoRedo undo={undo} redo={redo} />
      <Canvas texts={texts} setTexts={setTexts} />
      <TextInput onAddText={handleAddText} />
      <FontControls onFontChange={handleFontChange} />
    </div>
  );
}

export default Home;
