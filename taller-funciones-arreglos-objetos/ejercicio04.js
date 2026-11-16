//EJERCICIO 04 | Conversor de temperaturas
const celsiusAFahrenheit = (gradosCelsius) => (gradosCelsius * 9 / 5) + 32;
const fahrenheitACelsius = (gradosFahrenheit) => (gradosFahrenheit - 32) * 5 / 9;
console.log(`0°C = ${celsiusAFahrenheit(0)}°F`);
console.log(`32°F = ${fahrenheitACelsius(32)}°C`);
