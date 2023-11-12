let weather = {
  temp: 30,
  humidity: 7,
  windspeed: 20
};

let tempdata = "temp";
let humiditydata = "humidity";
let windspeeddata = "windspeed";

console.log(weather);
console.log(weather[tempdata]);
console.log(weather[humiditydata]);
console.log(weather[windspeeddata]);

let forecast = [
  {
    day: "Monday",
    temp: 31,
    humidity: 8,
    windspeed: 23
  },
  {
    day: "Tuesday",
    temp: 32,
    humidity: 9,
    windspeed: 24
  },
  {
    day: "Wednesday",
    temp: 33,
    humidity: 10,
    windspeed: 25
  },
  {
    day: "Thursday",
    temp: 34,
    humidity: 11,
    windspeed: 26
  },
  {
    day: "Friday",
    temp: 35,
    humidity: 12,
    windspeed: 27
  },
  {
    day: "Saturday",
    temp: 36,
    humidity: 13,
    windspeed: 28
  },
  {
    day: "Sunday",
    temp: 37,
    humidity: 14,
    windspeed: 29
  }
];
console.log(forecast);
