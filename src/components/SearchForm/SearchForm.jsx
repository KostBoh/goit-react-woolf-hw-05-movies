import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    //   const handleSubmit= value => {
    // setSearchParams({ query: value });
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={search} onChange={handleChange} type="text" autoFocus />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
