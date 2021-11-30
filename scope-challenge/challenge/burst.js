// set getRandomHue to function that generates a number from a range
const getRandomHue = randomRange(0, 360);
let mousedown = false;

document.addEventListener("mousedown", (event) => {
  mousedown = true;
  const { clientX, clientY } = event;
  const burst = createBurst(clientX, clientY);
  document.body.appendChild(burst);
});

document.addEventListener("mouseup", () => mousedown = false);

function createBurst(x, y) {
  const el = document.createElement("div");
  el.classList.add("burst");

  const hue = getRandomHue();
  el.style.setProperty("--hue", hue);
  
  const top = y - 4;
  const left = x - 4;
  el.style.setProperty("top", top + "px");
  el.style.setProperty("left", left + "px");

  let size = 1;
  
  function grow() {
    size += 1;
    el.style.setProperty("transform", `scale(${size})`);
    if (mousedown) {
      requestAnimationFrame(grow);
    }
  }

  requestAnimationFrame(grow);
  return el;
}
