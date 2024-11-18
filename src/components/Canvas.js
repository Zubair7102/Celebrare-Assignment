import React from 'react';
import { Rnd } from 'react-rnd';

const Canvas = ({ texts, setTexts }) => {
  return (
    <div className="border-2 border-green-500 w-full h-96 relative">
      {texts.map((text) => (
        <Rnd
          key={text.id}
          default={{
            x: text.x,
            y: text.y,
            width: text.width,
            height: text.height,
          }}
          onDragStop={(e, d) => {
            const newTexts = texts.map((t) => {
              if (t.id === text.id) {
                return { ...t, x: d.x, y: d.y };
              }
              return t;
            });
            setTexts(newTexts);
          }}
        >
          <div
            style={{
              fontSize: `${text.fontStyle.fontSize}px`,
              fontFamily: text.fontStyle.fontFamily,
              fontWeight: text.fontStyle.fontWeight,
              fontStyle: text.fontStyle.fontStyle,
              textDecoration: text.fontStyle.textDecoration,
            }}
            className="p-2 cursor-pointer"
          >
            {text.content}
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default Canvas;
