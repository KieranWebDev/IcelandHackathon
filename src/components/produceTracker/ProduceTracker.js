import React, { useState } from 'react';
import { annualProduce } from '../../data';
import './producetracker.css';

import Card from '../Card/Card';

const ProduceTracker = () => {

  const [produceList, setProduceList] = useState([]);
  const [month, setMonth] = useState(null);


  const handleClick = (month) => {
    setMonth(month);
    setProduceList(annualProduce[month]);
    console.log("produce list", produceList);
  }




  return (
      <section>
        <div className="container">
          <h1>Seasonal Produce Finder</h1>
          <h3>Find out which foods are in season</h3>


          <div>
            <button className="january" onClick={() => handleClick(0)}>January</button>
            <button className="february" onClick={() => handleClick(1)}>February</button>
            <button className="march" onClick={() => handleClick(2)}>March</button>
            <button className="april" onClick={() => handleClick(3)}>April</button>
            <button className="may" onClick={() => handleClick(4)}>May</button>
            <button className="june" onClick={() => handleClick(5)}>June</button>
            <button className="july" onClick={() => handleClick(6)}>July</button>
            <button className="august" onClick={() => handleClick(7)}>August</button>
            <button className="september" onClick={() => handleClick(8)}>September</button>
            <button className="october" onClick={() => handleClick(9)}>October</button>
            <button className="november" onClick={() => handleClick(10)}>November</button>
            <button className="december" onClick={() => handleClick(11)}>December</button>

          </div>

        
        </div>
      </section>
  )
}

export default ProduceTracker;