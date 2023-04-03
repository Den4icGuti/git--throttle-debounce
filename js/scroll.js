const refs = {
  span: document.querySelector(".js-counter"),
};

let counterScroll = 0;

function onCounterScroll() {
  counterScroll += 1;
  console.log(counterScroll);
  console.log("wheel event");

  if (counterScroll > 50) {
    refs.span.textContent = "End";
    return;
  }
  refs.span.textContent = counterScroll;
}

// function optimization() {
//   setTimeout(onCounterScroll, 300);
// }

window.addEventListener("wheel", _.debounce(onCounterScroll, 300));
