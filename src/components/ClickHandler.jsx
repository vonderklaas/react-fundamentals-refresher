export const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log(event);
    console.log(count);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click 1 Time</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5 Times</button>
    </div>
  );
};
