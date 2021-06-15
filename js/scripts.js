import initMenuMobile from './module/menu-mobile.js';
import initApiShipping from './module/api-shipping.js';
import ReqProducts from './module/req-product.js';
import SetImgs from './module/set-Imagens.js';

initMenuMobile();
initApiShipping();
const reqproducts = new ReqProducts('assets/api-product/product.json', '[data-product="imagens"]', '[data-product="imagem"]');
reqproducts.init();
const setimgs = new SetImgs('[data-product="imagem"]', '[data-product="imagens"]');
setimgs.init();
