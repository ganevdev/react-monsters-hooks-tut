import './SearchParams.css';

import React, { useEffect, useState } from 'react';

import CardList from '../CardList';

const SearchParams = () => {
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([]);

  const requestUsers = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  };

  const filterMonsters = (monsters, search = '') =>
    monsters.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="placeholder"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <CardList monsters={filterMonsters(monsters, search)} />
    </div>
  );
};

export default SearchParams;
