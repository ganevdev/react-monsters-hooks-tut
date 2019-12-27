import './CardList.css';

import React from 'react';

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters ? monsters.map(m => <Card key={m.id} monster={m} />) : 'nosing'}
    </div>
  );
};

export default CardList;
