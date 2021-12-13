const instance = basicLightbox.create(`
<div class = 'modal'>
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
   <img src ="">
   <button>Close</button>
  </div>
`)



const refs = {
  buttons: document.querySelector('.js-buttons'),
  image: instance.element().querySelector('img'),
  closeButton:instance.element().querySelector('button')
}
let image;


refs.buttons.addEventListener('click', onOpenBtn);
refs.closeButton.addEventListener('click', onCloseModal);
 
function onOpenBtn() {
  refs.image.src = '/img/image.jpg';
  console.log(instance.element())
  instance.show()
}

function onCloseModal(event) { 
  instance.close()
}
 



