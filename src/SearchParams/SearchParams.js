import './SearchParams.css';

import React, { useEffect, useRef, useState } from 'react';

import CardList from '../CardList';

// this function can be anywere
const requestUsers = async () => {
  try {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await users.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

const SearchParams = () => {
  const [search, setSearch] = useState('');
  const componentIsMounted = useRef(true);
  const [monsters, setMonsters] = useState([]);

  const filterMonsters = (monsters, search = '') =>
    monsters.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    requestUsers()
      .then(users => {
        if (componentIsMounted.current) setMonsters(users);
      })
      .catch(error => console.error(error));
    // cleanup function, in which we are setting this component as unmounted
    // this is an equivalent to componentWillUnmount class-based components
    return () => (componentIsMounted.current = false);
    //
    // old
    // requestUsers().then(usersFromApi => setMonsters(usersFromApi));
    //
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
