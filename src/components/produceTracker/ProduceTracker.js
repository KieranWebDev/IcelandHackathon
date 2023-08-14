import React, { useState } from 'react';
import { annualProduce } from '../../data';
import './producetracker.css';
import defaultPic from '../../assets/defaultImg.png';

// components
import MonthPickerButton from '../MonthPickerButton/MonthPickerButton';
import Card from '../Card/Card';

const ProduceTracker = () => {
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
        <div className="banner"></div>
        <h1>Seasonal Produce Finder</h1>
        <h3>Find out which foods are in season</h3>

        <div className="buttonContainer">
          <MonthPickerButton
            handleClick={() => handleClick(0)}
            activeMonth={activeMonth}
            index={0}
            month="January"
          />
          <MonthPickerButton
            handleClick={() => handleClick(1)}
            activeMonth={activeMonth}
            index={1}
            month="February"
          />
          <MonthPickerButton
            handleClick={() => handleClick(2)}
            activeMonth={activeMonth}
            index={2}
            month="March"
          />
          <MonthPickerButton
            handleClick={() => handleClick(3)}
            activeMonth={activeMonth}
            index={3}
            month="April"
          />
          <MonthPickerButton
            handleClick={() => handleClick(4)}
            activeMonth={activeMonth}
            index={4}
            month="May"
          />
          <MonthPickerButton
            handleClick={() => handleClick(5)}
            activeMonth={activeMonth}
            index={5}
            month="June"
          />
          <MonthPickerButton
            handleClick={() => handleClick(6)}
            activeMonth={activeMonth}
            index={6}
            month="July"
          />
          <MonthPickerButton
            handleClick={() => handleClick(7)}
            activeMonth={activeMonth}
            index={7}
            month="August"
          />
          <MonthPickerButton
            handleClick={() => handleClick(8)}
            activeMonth={activeMonth}
            index={8}
            month="September"
          />
          <MonthPickerButton
            handleClick={() => handleClick(9)}
            activeMonth={activeMonth}
            index={9}
            month="October"
          />
          <MonthPickerButton
            handleClick={() => handleClick(10)}
            activeMonth={activeMonth}
            index={10}
            month="November"
          />
          <MonthPickerButton
            handleClick={() => handleClick(11)}
            activeMonth={activeMonth}
            index={11}
            month="December"
          />

          {/* <button
            className="january"
            onClick={() => handleClick(0)}
            style={{
              background: activeMonth === 0 ? 'blue' : 'white',
              color: activeMonth === 0 ? 'white' : 'black',
            }}
          >
            January
          </button>
          <button
            className="february"
            onClick={() => handleClick(1)}
            style={{
              background: activeMonth === 1 ? 'blue' : 'white',
              color: activeMonth === 1 ? 'white' : 'black',
            }}
          >
            February
          </button>
          <button
            className="march"
            onClick={() => handleClick(2)}
            style={{
              background: activeMonth === 2 ? 'blue' : 'white',
              color: activeMonth === 2 ? 'white' : 'black',
            }}
          >
            March
          </button>
          <button
            className="april"
            onClick={() => handleClick(3)}
            style={{
              background: activeMonth === 3 ? 'blue' : 'white',
              color: activeMonth === 3 ? 'white' : 'black',
            }}
          >
            April
          </button>
          <button
            className="may"
            onClick={() => handleClick(4)}
            style={{
              background: activeMonth === 4 ? 'blue' : 'white',
              color: activeMonth === 4 ? 'white' : 'black',
            }}
          >
            May
          </button>
          <button
            className="june"
            onClick={() => handleClick(5)}
            style={{
              background: activeMonth === 5 ? 'blue' : 'white',
              color: activeMonth === 5 ? 'white' : 'black',
            }}
          >
            June
          </button>

          <button
            className="july"
            onClick={() => handleClick(6)}
            style={{
              background: activeMonth === 6 ? 'blue' : 'white',
              color: activeMonth === 6 ? 'white' : 'black',
            }}
          >
            July
          </button>
          <button
            className="august"
            onClick={() => handleClick(7)}
            style={{
              background: activeMonth === 7 ? 'blue' : 'white',
              color: activeMonth === 7 ? 'white' : 'black',
            }}
          >
            August
          </button>
          <button
            className="september"
            onClick={() => handleClick(8)}
            style={{
              background: activeMonth === 8 ? 'blue' : 'white',
              color: activeMonth === 8 ? 'white' : 'black',
            }}
          >
            September
          </button>
          <button
            className="october"
            onClick={() => handleClick(9)}
            style={{
              background: activeMonth === 9 ? 'blue' : 'white',
              color: activeMonth === 9 ? 'white' : 'black',
            }}
          >
            October
          </button>
          <button
            className="november"
            onClick={() => handleClick(10)}
            style={{
              background: activeMonth === 10 ? 'blue' : 'white',
              color: activeMonth === 10 ? 'white' : 'black',
            }}
          >
            November
          </button>
          <button
            className="december"
            onClick={() => handleClick(11)}
            style={{
              background: activeMonth === 11 ? 'blue' : 'white',
              color: activeMonth === 11 ? 'white' : 'black',
            }}
          >
            December
          </button> */}
        </div>
      </div>
      <hr />
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
          <div className="defaultImg">
            <h3>Please Select a month</h3>
            <img src={defaultPic} alt="defaultPic" />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProduceTracker;
