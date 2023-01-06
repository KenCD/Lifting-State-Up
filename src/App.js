import { useState } from "react";
import "./styles.css";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default function App() {
  const [value, setValue] = useState({ temperature: "", scale: "c" });
  const scale = value.scale;
  const temperature = value.temperature;
  console.log(value);
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  const handleCelsiusChange = (temperature) => {
    setValue({ scale: "c", temperature });
  };

  const handleFahrenheitChange = (temperature) => {
    setValue({ scale: "f", temperature });
  };

  return (
    <div className="App">
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}
