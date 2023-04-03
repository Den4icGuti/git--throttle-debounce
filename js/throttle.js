const refs = {
  progress: document.querySelector(".progress"),
  sections: document.querySelector(".js-sections"),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

const handleScroll = (e) => {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
  console.log(e);
};

// function optimization() {
//   setTimeout(onCounterScroll, 300);
// }

// function throttle(callback, delay) {
//   let id = 0;
//   return function (e) {
//     if (id) {
//       return;
//     }
//     id = setTimeout(() => {
//       callback(e);
//       id = 0;
//     }, delay);
//   };
// }

function debounce(callback, delay) {
  let id = 0;
  return function (e) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      callback(e);
      id = 0;
      console.log(e);
    }, delay);
  };
}

refs.sections.addEventListener("wheel", debounce(handleScroll, 400));
