import React from 'react';
import './producetracker.css';

import Card from '../Card/Card';

const ProduceTracker = () => {


  return (
      <section>
        <div className="container">
          <h1>Seasonal Produce Finder</h1>
          <h3>Find out which foods are in season</h3>

          <form>
            <button className="january">January</button>
            <button className="february">February</button>
            <button className="march">March</button>
            <button className="april">April</button>
            <button className="may">May</button>
            <button className="june">June</button>
            <button className="july">July</button>
            <button className="august">August</button>
            <button className="september">September</button>
            <button className="october">October</button>
            <button className="november">November</button>
            <button className="december">December</button>
          </form>

          <div className="display">
        

          </div>
        </div>
      </section>
  )
}

export default ProduceTracker;