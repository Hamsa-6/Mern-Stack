import React, { useState } from 'react';

const MeaningFinder = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${inputValue}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching the API:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        placeholder="Enter a name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /><br></br><br></br>
      <button onClick={handleClick}>Find Meaning</button>
    </div>
  );
};

export default MeaningFinder;
