import MonthPickerButton from '../MonthPickerButton/MonthPickerButton.js';

function MonthPickerButtonsContainer({ handleClick, activeMonth }) {
  return (
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
    </div>
  );
}

export default MonthPickerButtonsContainer;
