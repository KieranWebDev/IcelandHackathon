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
import MonthPickerButtonsContainer from './components/MonthPickerButtonsContainer/MonthPickerButtonsContainer';
import ProduceListCardContainer from './components/ProduceListCardContainer/ProduceListCardContainer';

function App() {
  const [produceList, setProduceList] = useState([]);
  const [activeMonth, setActiveMonth] = useState(null);

  const handleClick = (month) => {
    setActiveMonth(month);
    setProduceList(annualProduce[month].slice(0, 10));
    // console.log('produce list', produceList, activeMonth);
  };

  return (
    <section>
      <div className="container">
        <Banner />
        <MonthPickerButtonsContainer
          handleClick={handleClick}
          activeMonth={activeMonth}
        />
        <ProduceListCardContainer produceList={produceList} />
      </div>
    </section>
  );
}

export default App;
