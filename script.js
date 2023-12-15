const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput = function () {
  let inputTemperatureUnitValue = inputTemperatureUnit.value;
  let resultTemperatureUnitValue = resultTemperatureUnit.value;

  // Get the input temperature value
  let inputTemperatureValue = parseFloat(temperature.value);

  // Conversion logic...
  let convertedTemperature = 0;

  if (inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Kelvin") {
    convertedTemperature = inputTemperatureValue + 273.15;
  } else if (inputTemperatureUnitValue === "Celsius" && resultTemperatureUnitValue === "Fahrenheit") {
    convertedTemperature = (inputTemperatureValue * 9/5) + 32;
  } else if (inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Celsius") {
    convertedTemperature = inputTemperatureValue - 273.15;
  } else if (inputTemperatureUnitValue === "Kelvin" && resultTemperatureUnitValue === "Fahrenheit") {
    convertedTemperature = (inputTemperatureValue - 273.15) * 9/5 + 32;
  } else if (inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celsius") {
    convertedTemperature = (inputTemperatureValue - 32) * 5/9;
  } else if (inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Kelvin") {
    convertedTemperature = (inputTemperatureValue - 32) * 5/9 + 273.15;
  } else {
    // If the input and result units are the same, keep the temperature unchanged
    convertedTemperature = inputTemperatureValue;
  }

  // Display the converted temperature with 2 decimal places
  result.value = convertedTemperature.toFixed(2);
}
