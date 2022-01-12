// setting global variables
let session = "";
let not24hr = false;




// origianl clock idea from https://codepen.io/afarrar/pen/JRaEjP
function startClock(){
  
  let date = new Date();
  let hr = date.getHours();
  let mn = date.getMinutes();
  let sc = date.getSeconds();
  
// setting hour "0" to 12
  if (hr == 0) {
    hr = 12;
  }

  // event listeners
  // checkbox event listener originally from https://www.codegrepper.com/code-examples/javascript/javascript+event+listener+checkbox
  document.getElementById('meridSwitch').addEventListener('change', e => {

    if(e.target.checked){
        // only displaying AM or PM if the 12 hour clock is toggled
        document.getElementById('meridian').style.display = "block";
        document.getElementById('meridian').innerHTML = session;
        not24hr = true;
    } else {
      document.getElementById('meridian').style.display = "none";
      not24hr = false;
    }

  });


  // added functionality for a 12/24 toggle
  // if clock is set to a 12hr clock, subtract 12 from the hour
  hr = (not24hr) ? hr - 12 : hr;


// making sure a "0" is in front of any single digit
  hr = (hr < 10) ? "0" + hr : hr;
  mn = (mn < 10) ? "0" + mn : mn;
  sc = (sc < 10) ? "0" + sc : sc;

// setting AM or PM
  session = (hr > 12) ? "PM" : "AM";

  let currentTime = hr + ":" + mn + ":" + sc;
  document.getElementById('clockTime').innerText = currentTime;
  document.getElementById('clockTime').innerContent = currentTime;


  setTimeout(startClock, 1000);
}

startClock();
