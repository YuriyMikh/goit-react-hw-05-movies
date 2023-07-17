import React, { useState } from 'react';

export const FormSearchMovies = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="enter a request"
      />
      <button type="submit">Search</button>
    </form>
  );
};
