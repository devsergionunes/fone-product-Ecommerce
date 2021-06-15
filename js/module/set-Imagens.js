export default class SetImgs {
  constructor(imgTamb, imagens) {
    this.imgTamb = document.querySelector(imgTamb);
    this.imagens = document.querySelector(imagens);

    // reescrevendo o this da da funcao
    this.hendalImag = this.hendalImag.bind(this);
  }

  hendalImag(event) {
    event.preventDefault();
    const src = event.target.getAttribute('src');
    const alt = event.target.getAttribute('alt');
    this.imgTamb.querySelector('img').alt = alt;
    this.imgTamb.querySelector('img').src = src;
  }

  addEvent() {
    this.imagens.addEventListener('click', this.hendalImag);
  }

  init() {
    if (this.imgTamb && this.imagens) {
      this.addEvent();
    }
    return this;
  }
}
