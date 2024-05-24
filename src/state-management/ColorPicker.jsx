import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#1fc7ab");

  function handleColorChange (event) {
    setColor(event.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">Color Picker</p>
      <div style={{ backgroundColor: color, height: "300px", width: "300px", transition: "ease" }} className="flex justify-center items-center rounded-lg">
        Selected Color: {color}
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
