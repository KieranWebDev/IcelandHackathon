function MonthPickButton({ handleClick, activeMonth }) {
  return (
    <button
      onClick={handleClick}
      style={{
        background: activeMonth === 0 ? 'blue' : 'white',
        color: activeMonth === 0 ? 'white' : 'black',
      }}
    >
      January
    </button>
  );
}

export default MonthPickButton;
