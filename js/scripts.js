import initMenuMobile from './module/menu-mobile.js';
import initApiShipping from './module/api-shipping.js';
import initReqProducts from './module/req-product.js';
import SetImgs from './module/set-Imagens.js';

initMenuMobile();
initApiShipping();
initReqProducts();
const setimgs = new SetImgs('[data-product="imagem"]', '[data-product="imagens"]');
setimgs.init();
