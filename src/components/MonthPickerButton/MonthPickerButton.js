import './MonthPickerButton.css';

function MonthPickerButton({ handleClick, activeMonth, index, month }) {
  return (
    <button
      onClick={handleClick}
      style={{
        background: activeMonth === index ? 'blue' : 'white',
        color: activeMonth === index ? 'white' : 'black',
      }}
    >
      {month}
    </button>
  );
}

export default MonthPickerButton;
