import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    const words = newText.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (customDictionary.hasOwnProperty(word)) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }

    setCorrection('');
  };

  return (
    <div>
      <h1>XSpellCheck</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text..."
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
