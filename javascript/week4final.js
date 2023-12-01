//Changing H1 according to search input
let Form1 = document.querySelector("#search-check");

Form1.addEventListener("submit", function switchUp(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-me");
  let cityNow = document.querySelector("#city-now");
  cityNow.innerHTML = searchInput.value;
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
