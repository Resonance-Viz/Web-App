import React, { useState } from 'react';

const SubmitPage = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const handleSubmit = () => {
    //TODO
    console.log('Submitted:', value);
    setValue('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="Enter ID" 
        style={{ marginRight: '10px' }} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitPage;
