let numeros = document.querySelector('#contador');

// ID times
let id_hours = document.querySelector('#hours'); 
let id_minutes = document.querySelector('#minutes'); 
let id_seconds = document.querySelector('#seconds'); 

// Buttons
let start_button = document.querySelector('#start')
let stop_button = document.querySelector('#stop')
let restart_button = document.querySelector('#restart')

// Times
let hours = 0;
let minutes = 0;
let seconds = 0;


function start_int() {
  let seconds_interval = setInterval(() => {
    seconds++;
    id_seconds.innerHTML = `${seconds}s`;
    if (seconds == 60) {
      seconds = 0;
      id_seconds.innerHTML = `${seconds}s`;
      start_minutes();
    }

    if (minutes == 60) {
      minutes = 0;
      id_minutes.innerHTML = `${minutes}m`;
      start_hours();
    }
  
  }, 1000);

  restart_button.onclick = function() {
    display_blocks();
    clearInterval(seconds_interval);
    seconds = 0;
    id_seconds.innerHTML = `${seconds}s`;
    start_button.innerHTML = "START";
  }

  stop_button.onclick = function() {
    display_blocks();
    clearInterval(seconds_interval);
  }
}

function start_minutes() {
  minutes++;
  id_minutes.innerHTML = `${minutes}m`;
}

function start_hours() {
  hours++;
  id_hours.innerHTML = `${hours}h`;
}


start_button.onclick = function() {
  display_blocks();
  start_int();
}


function display_blocks() {
  if (start_button.style.display != "none") {
    start_button.style.display = "none";
    stop_button.style.display = "initial";
    restart_button.style.display = "initial";
  } else if (start_button.style.display == "none") {
    start_button.innerHTML = "RESUME";
    start_button.style.display = "initial";
    stop_button.style.display = "none";
    restart_button.style.display = "none";
  }
}


