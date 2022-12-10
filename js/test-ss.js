// Server side testing 24/7 clock

// ID times
let id_hours = document.querySelector('#hours'); 
let id_minutes = document.querySelector('#minutes'); 
let id_seconds = document.querySelector('#seconds'); 

// Times
let hours = 0;
let minutes = 0;
let seconds = 0;

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

function start_minutes() {
  minutes++;
  id_minutes.innerHTML = `${minutes}m`;
}

function start_hours() {
  hours++;
  id_hours.innerHTML = `${hours}h`;
}


// click

document.querySelector(".time-recount").onclick = function() {
  let question = prompt("¿¿¿Do you want to restart the time???")

  if (question == "yes") {
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    alert("Why did you click the button?")
  }
}



