const lazyRefs = document.querySelectorAll("img[loading='lazy']");

if ("loading" in HTMLImageElement.prototype) {
  onSupportBrowser();
} else {
  doNotSupportLazy();
}

function onSupportBrowser() {
  console.log("Support lazy loading");
  lazyRefs.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function doNotSupportLazy() {
  console.log("Do not lazy load");
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js";

  document.body.appendChild(script);
}

const rendImg = () =>
  lazyRefs.forEach((img) => {
    img.addEventListener("load", loadImg, { once: true });
  });

function loadImg(e) {
  console.log("img load");
  e.target.classList.add("appear");
}
