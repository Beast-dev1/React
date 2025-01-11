import { useState } from "react";

const App = () => {
  const [color, setColor] = useState();

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div className="color-display">
        Selected color = {color}
        <label>Select color :</label>
        <input type="color" name="color" onChange={handleChange}></input>
      </div>
    </div>
  );
};

export default App;
