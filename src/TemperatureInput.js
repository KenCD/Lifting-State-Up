const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
  };

  const handleChangeEvent = (e) => {
    onTemperatureChange(e.target.value);
  };
  console.log(scaleNames[scale]);

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChangeEvent} />
    </fieldset>
  );
};

export default TemperatureInput;
