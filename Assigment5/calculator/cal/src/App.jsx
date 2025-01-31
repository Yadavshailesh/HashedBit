import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  const handleDivision = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult("Error: Division by zero");
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginLeft: "20%",
          marginTop: "-10%",
        }}
      >
        Calculator
      </h1>
      <input
        style={{ fontSize: "30px", marginLeft: "160px" }}
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        placeholder="Number 1"
      />
      <br></br>
      <div> 
       <input
        style={{ fontSize: "30px", marginLeft: "160px", marginTop: "20px" }}
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
        placeholder="Number 2"
      />
</div>
      <div
        style={{
          marginLeft: "12%",
          padding: "10px",
          backgroundColor: "aqua",
          padding: "2px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <button
          style={{
            padding: "1px",
            width: "100px",
            margin: "20px",
            color: "white",
            fontSize: "30px ",
          }}
          onClick={handleAddition}
        >
          +
        </button>
        <button
          style={{
            padding: "1px",
            width: "100px",
            margin: "20px",
            color: "white",
            fontSize: "30px ",
          }}
          onClick={handleSubtraction}
        >
          -
        </button>
        <button
          style={{
            padding: "1px",
            width: "100px",
            margin: "20px",
            color: "white",
            fontSize: "30px ",
          }}
          onClick={handleMultiplication}
        >
          *
        </button>
        <button
          style={{
            padding: "1px",
            width: "100px",
            margin: "20px",
            color: "white",
            fontSize: "30px ",
          }}
          onClick={handleDivision}
        >
          /
        </button>
      </div>
      <p
        style={{
          marginLeft: "250px",
          marginTop: "20px",
          fontSize: "40px",
          color: "orange",
        }}
      >
        Result: {result}
      </p>
      </div>
      
  );
}

export default Calculator;
