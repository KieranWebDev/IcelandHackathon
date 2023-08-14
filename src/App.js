import React, { useState } from 'react';
// css
// import './producetracker.css';
import './App.css';
// product data
import { annualProduce } from './data';
// components
import MonthPickerButton from '.';
import Card from './components/Card/Card';
import Banner from './components/Banner/Banner';

function App() {

  const [produceList, setProduceList] = useState([]);
  const [activeMonth, setActiveMonth] = useState(null);

  const handleClick = (month) => {
    setActiveMonth(month);
    setProduceList(annualProduce[month]);
    // console.log('produce list', produceList, activeMonth);
  };


  return (
    <section>
      <div className="container">
        <Banner />
      </div>
    </section>
  );
}

export default App;
