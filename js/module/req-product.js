export default function initReqProducts() {
  const domImagens = document.querySelector('[data-product="imagens"]');
  const domTamb = document.querySelector('[data-product="imagem"]');
  function creatTagImg(src, alt) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    return img;
  }

  const products = fetch('assets/api-product/product.json');
  products.then((json) => json.json())
    .then((product) => {
      product.forEach((item) => {
        item.imagens.forEach((imagem, index) => {
          domImagens.appendChild(creatTagImg(imagem.src, imagem.alt));
          if (index === 0) {
            domTamb.append(creatTagImg(imagem.src, imagem.alt));
          }
        });
      });
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
