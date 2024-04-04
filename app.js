// 04.04.2024 - TASK - ASGAR ISMAYILOV
let count = 0;
btn.addEventListener("click", () => {
  let demo = setInterval(() => {
    btn.textContent = `Click Me ${++count}`;
    btn.style.backgroundColor = getRandColor();

    if (count === 10) {
      clearInterval(demo);
      direction = false;
      let demo2 = setInterval(() => {
        btn.textContent = `Click Me ${--count}`;
        btn.style.backgroundColor = getRandColor();
        if (count === 1) {
          clearInterval(demo2);
        }
      }, 1000);
    }
  }, 1000);
});

function getRandColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  return `rgb(${r},${g},${b})`;
}
