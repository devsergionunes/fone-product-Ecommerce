export default class ReqProducts {
  constructor(url, domImagens, domTamb) {
    this.url = url;
    this.domImagens = document.querySelector(domImagens);
    this.domTamb = document.querySelector(domTamb);
  }

  creatTagImg(src, alt) {
    this.img = document.createElement('img');
    this.img.setAttribute('src', src);
    this.img.setAttribute('alt', alt);
    return this.img;
  }

  reqAllImgs() {
    const products = fetch(this.url);
    products.then((json) => json.json())
      .then((product) => {
        product.forEach((item) => {
          item.imagens.forEach((imagem, index) => {
            this.domImagens.appendChild(this.creatTagImg(imagem.src, imagem.alt));
            if (index === 0) {
              this.domTamb.append(this.creatTagImg(imagem.src, imagem.alt));
            }
          });
        });
      }).catch((erro) => {
        console.log(Error(erro));
      });
  }

  init() {
    if (this.url && this.domTamb && this.domImagens) {
      this.reqAllImgs();
    }
    return this;
  }
}
