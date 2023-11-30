//Changing H1 according to search input
let form1 = document.querySelector("#search-check");
form1.addEventListener("submit", function switchMe(event) {
  event.preventDefault();
  let cityVal = document.querySelector("#search-me");
  let h1 = document.querySelector(".city-now");
  if (cityVal.value) {
    h1.innerHTML = cityVal.value;
  }
});

// Changing dates to real time dates
let rightNow = new Date();
let day = rightNow.getDay();
let all_Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = all_Days[day];
let hour = rightNow.getHours();
let minute = rightNow.getMinutes();

let realTime = document.querySelector(".real");
realTime.innerHTML = `${currentDay} ${hour}:${minute}`;
