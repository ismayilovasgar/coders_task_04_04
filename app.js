// 04.04.2024 - TASK - ASGAR ISMAYILOV
let i = 1;
let direction = true;
btn.addEventListener("click", () => {
  if (i === 1) {
    direction = true;
  }
  if (i === 10) {
    direction = false;
  }

  if (direction) {
    btn.textContent = `Click me ${i++}`;
    btn.style.backgroundColor = getRandColor();
  } else {
    btn.style.backgroundColor = getRandColor();
    btn.textContent = `Click me ${i--}`;
  }
});

function getRandColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  return `rgb(${r},${g},${b})`;
}
