import React from 'react';

const UndoRedo = ({ undo, redo }) => {
  return (
    <div className="flex justify-center space-x-4 mb-10">
      <button onClick={undo} className="bg-gray-300 px-4 py-2">
        Undo
      </button>
      <button onClick={redo} className="bg-gray-300 px-4 py-2">
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
