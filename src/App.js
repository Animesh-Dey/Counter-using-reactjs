import { React, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

export default function App() {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <div className="container">
        <Card value={value} incrementHandler={increment} decrementHandler={decrement} />
      </div>
    </div>
  );
}
