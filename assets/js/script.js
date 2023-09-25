document.getElementById('celsiusToFahrenheit').addEventListener('click', function() {
    convertTemperature('Celsius', 'Fahrenheit', celsiusToFahrenheit);
  });
  
  document.getElementById('fahrenheitToCelsius').addEventListener('click', function() {
    convertTemperature('Fahrenheit', 'Celsius', fahrenheitToCelsius);
  });
  
  document.getElementById('kelvinToCelsius').addEventListener('click', function() {
    convertTemperature('Kelvin', 'Celsius', kelvinToCelsius);
  });
  
  document.getElementById('celsiusToKelvin').addEventListener('click', function() {
    convertTemperature('Celsius', 'Kelvin', celsiusToKelvin);
  });
  
  function convertTemperature(fromUnit, toUnit, conversionFunction) {
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    
    if (inputElement.value === '') {
      resultElement.textContent = 'Please enter a value';
    } else {
      const inputValue = parseFloat(inputElement.value);
      const convertedValue = conversionFunction(inputValue);
      resultElement.textContent = `${inputValue.toFixed(2)}°${fromUnit} is ${convertedValue.toFixed(2)}°${toUnit}`;
    }
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  