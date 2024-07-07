import React, { useState } from 'react';
import './App.css';

const App= () => {
  const [colorName, setColorName] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (colorName.trim() !== '') {
      const newBox = { color: colorName };
      setBoxes([...boxes, newBox]);
      setColorName('');
    }
  };

  return (
    <div className="box-generator">
      <h2>Generador de Cajas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </label>
        <button id="btn" type="submit">Add</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: box.color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;