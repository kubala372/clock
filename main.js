function timeBelowTen(time) {
    return (time < 10) ? "0" + time : time;
  }
  
  function currentTime() {
    const date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    
    currentHours = timeBelowTen(currentHours);
    currentMinutes = timeBelowTen(currentMinutes);
    currentSeconds = timeBelowTen(currentSeconds);
    
    document.getElementById('hours').innerHTML = currentHours;
    document.getElementById('minutes').innerHTML = currentMinutes;
    document.getElementById('seconds').innerHTML = currentSeconds;

    setTimeout(currentTime, 1000);
}

currentTime();

  