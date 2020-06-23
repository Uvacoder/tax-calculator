import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState<string>("1000");
  const [percentage, setPercentage] = useState<string>("32.5");
  const [invertedPercentage, setinvertedPercentage] = useState<number>(67.5);
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    const calcTotal = (value: string): void => {
      const percentInverted = 100 - Number(percentage);
      setinvertedPercentage(percentInverted);
      const total = (Number(value) * 100) / percentInverted;
      setTotal(total.toFixed(2));
    };
    calcTotal(value);
  }, [value, percentage]);

  return (
    <div className="App">
      <h1>Tax calculator</h1>

      <div className="inputGroup">
        <label>
          I want to pay myself
          <input
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>
      </div>

      <div className="inputGroup">
        <label>
          I want to put away
          <input
            value={percentage}
            onChange={event => setPercentage(event.target.value)}
          />
          % for tax
        </label>
      </div>

      <h2>
        Total to pay myself: <strong>£{total}</strong>
      </h2>

      <h3>
        Total tax for {total}:{" "}
        <strong>£{(Number(total) - Number(value)).toFixed(2)}</strong>
      </h3>

      <h3>
        {invertedPercentage}% of {total} ={" "}
        <strong>{Number(value).toFixed(2)}</strong>
      </h3>
    </div>
  );
}
