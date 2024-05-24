// Click event : 
// An interaction when a user clicks on a specific element.
// We can respond to clicks by passing a callback to the onClick event handler.

const MyButton = () => {
  // simple onClick function
  const handleClick = () => console.log("Pressed");

  // having parameter
  const handleClick2 = (para) => console.log(`${para} handle click`);

  const handleClick3 = (e) => {
    console.log("Click event: ", e);
    // change the text of the button
    e.target.textContent = "Press here";
  };

  const handleClick4 = (e) => {
    // hide the image when press
    e.target.style.display = "none";
  };

  return (
    <>
      <button onClick={handleClick}>click me 1</button><br />
      {/* <p>if we passed handleClick2 like this, it will automatically execute without pressing</p> */}
      {/* <button onClick={handleClick2("Tom")}>click me</button> */}
      <button onClick={() => handleClick2("Tom")}>click me 2</button><br />
      <button onClick={(e) => handleClick3(e)}>click me 3</button><br />
      <img onClick={(e) => handleClick4(e)} src="https://picsum.photos/200/200" alt="image" />
    </>
  );
};

export default MyButton;
