// assign getRandomHue to a function that generates a number from a range
// randomRange returns a callback
const getRandomHue = randomRange(0, 360);
// flag for running or stopping animation
let mousedown = false;

document.addEventListener("mousedown", (event) => {
  mousedown = true;
  // destrucutre variables from x and y mouseclick coordinates
  const { clientX, clientY } = event;
  // create burst element at coordinates
  const burst = createBurst(clientX, clientY);
  document.body.appendChild(burst);
});

// change flag to false when mouseup event fires
document.addEventListener("mouseup", () => mousedown = false);

function createBurst(x, y) {
  const el = document.createElement("div");
  el.classList.add("burst");

  // generate random number to set as hue
  const hue = getRandomHue();
  el.style.setProperty("--hue", hue);
  
  // fix coordinates that were switched 
  const top = y - 4;
  const left = x - 4;
  el.style.setProperty("top", top + "px");
  el.style.setProperty("left", left + "px");

  let size = 1;
  
  function grow() {
    size += 1;
    el.style.setProperty("transform", `scale(${size})`);
    // continue animating while mouse is down
    if (mousedown) {
      requestAnimationFrame(grow);
    }
  }
  // call requestAnimationFrame and return the burst element
  requestAnimationFrame(grow);
  return el;
}

// Question: can you call a callback with arguments inside            requestAnimationFrame?
