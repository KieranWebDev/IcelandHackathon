import React, { useState } from 'react';
import { annualProduce } from '../../data';
import './producetracker.css';

import Card from '../Card/Card';

const ProduceTracker = () => {
  const [produceList, setProduceList] = useState([]);
  const [activeMonth, setActiveMonth] = useState(null);

  const handleClick = (month) => {
    setActiveMonth(month);
    setProduceList(annualProduce[month]);
    console.log('produce list', produceList, activeMonth);
  };

  return (
    <section>
      <div className="container">
        <h1>Seasonal Produce Finder</h1>
        <h3>Find out which foods are in season</h3>

        <div className="buttonContainer">
          <button
            className="january"
            onClick={() => handleClick(0)}
            style={{ background: activeMonth === 0 ? 'blue' : 'grey' }}
          >
            January
          </button>
          <button
            className="february"
            onClick={() => handleClick(1)}
            style={{ background: activeMonth === 1 ? 'blue' : 'grey' }}
          >
            February
          </button>
          <button
            className="march"
            onClick={() => handleClick(2)}
            style={{ background: activeMonth === 2 ? 'blue' : 'grey' }}
          >
            March
          </button>
          <button
            className="april"
            onClick={() => handleClick(3)}
            style={{ background: activeMonth === 3 ? 'blue' : 'grey' }}
          >
            April
          </button>
          <button
            className="may"
            onClick={() => handleClick(4)}
            style={{ background: activeMonth === 4 ? 'blue' : 'grey' }}
          >
            May
          </button>
          <button
            className="june"
            onClick={() => handleClick(5)}
            style={{ background: activeMonth === 5 ? 'blue' : 'grey' }}
          >
            June
          </button>
          <button
            className="july"
            onClick={() => handleClick(6)}
            style={{ background: activeMonth === 6 ? 'blue' : 'grey' }}
          >
            July
          </button>
          <button
            className="august"
            onClick={() => handleClick(7)}
            style={{ background: activeMonth === 7 ? 'blue' : 'grey' }}
          >
            August
          </button>
          <button
            className="september"
            onClick={() => handleClick(8)}
            style={{ background: activeMonth === 8 ? 'blue' : 'grey' }}
          >
            September
          </button>
          <button
            className="october"
            onClick={() => handleClick(9)}
            style={{ background: activeMonth === 9 ? 'blue' : 'grey' }}
          >
            October
          </button>
          <button
            className="november"
            onClick={() => handleClick(10)}
            style={{ background: activeMonth === 10 ? 'blue' : 'grey' }}
          >
            November
          </button>
          <button
            className="december"
            onClick={() => handleClick(11)}
            style={{ background: activeMonth === 11 ? 'blue' : 'grey' }}
          >
            December
          </button>
        </div>

        <div className="produce-list">
          {produceList.length > 0 ? (
            produceList.map((produce) => {
              return (
                <Card
                  key={produce.name}
                  name={produce.name}
                  image={produce.image}
                  description={produce.description}
                />
              );
            })
          ) : (
            <h1>Please Select a month</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProduceTracker;
