const instance = basicLightbox.create(`<div class="box">
<img class="simpleImg" src=""  width="200" height="200" alt="dog">
<button>Close</button>
</div>`);

const btnRefs = {
  one: document.querySelector(".js-one"),
  second: document.querySelector(".js-second"),
  img: instance.element().querySelector("img"),
  btnClose: instance.element().querySelector("button"),
};
const { one, second, img } = btnRefs;

function onWindowClick() {
  window.addEventListener("keydown", onCloseEsc);
}

function onButtonOneClick() {
  onWindowClick();
  btnRefs.img.src =
    "https://images.prom.ua/4067197782_w200_h200_4067197782.jpg";
  instance.show();
}

function onButtonSecondClick() {
  onWindowClick();
  btnRefs.img.src = "/img/imgGallery/20220528_120259-min.jpg";
  instance.show();
}

function onRemove() {
  window.removeEventListener("keydown", onCloseEsc);
}

function onCloseEsc(e) {
  if (e.code === "Escape") {
    instance.close();
    onRemove();
  }
}

function debounceCounter(callback, delay) {
  let counter = 0;
  let id = 0;

  return function (e) {
    if (id) {
      clearTimeout(id);
    }
    counter++;
    id = setTimeout(() => {
      callback(counter);
      id = 0;
      counter = 0;
    }, delay);
  };
}

function onImgClick(counter) {
  if (counter === 1) {
    instance.close();
    btnRefs.img.classList.re;
  } else {
    btnRefs.img.classList.add("img-zoom");
  }
}

one.addEventListener("click", onButtonOneClick);

second.addEventListener("click", onButtonSecondClick);

btnRefs.btnClose.addEventListener("click", instance.close);

btnRefs.img.addEventListener("click", debounceCounter(onImgClick, 200));
