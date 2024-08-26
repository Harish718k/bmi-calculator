import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiSatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setBmiStatus("UnderWeight");
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setBmiStatus("Normal weight");
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
        setBmiStatus("OverWeight");
      }
      else{
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height ad weight.")
    }
  };

  const clearBmi = () => {
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmiStatus("");
  };

  return (
    <>
      <div className="bmi-container">
        <div className="box">

        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <p className="error">{errorMessage}</p>
          <div className="input-field">
            <label htmlFor="height">Height(cm)</label>
            <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-field">
            <label htmlFor="weight">Weight(kg)</label>
            <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearBmi}>reset</button>
          {bmi!==null && (
            <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiSatus}</p>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
