const ref = document.querySelector(".js-cords");

let count = 0;

window.addEventListener("mousemove", _.throttle(onMove, 500));

function onMove(e) {
  count += 1;

  ref.textContent = `
  Количество вызовов onMove: ${count}
  
  X:${e.clientX}
  Y:${e.clientY}
  `;
}

const inputRef = document.querySelector(".js-input");

const countRef = document.querySelector(".js-count");

function onInputChange(e) {
  count += 1;

  countRef.textContent = `Количество вызовов функции onInputChange ${count} 
  Значение: ${e.target.value}`;
}

inputRef.addEventListener("input", _.debounce(onInputChange, 300));
