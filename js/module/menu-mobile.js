import initOutsideEvent from './outside-event.js';

export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"]');
  const navMenu = document.querySelector('[data-menu="nav"]');
  const active = 'active';
  const eventos = ['click'];
  function activeMenu() {
    buttonMenu.classList.toggle(active);
    navMenu.classList.toggle(active);
    initOutsideEvent(navMenu, buttonMenu, eventos, () => {
      buttonMenu.classList.remove(active);
      navMenu.classList.remove(active);
    });
  }
  eventos.forEach((evento) => {
    buttonMenu.addEventListener(evento, activeMenu);
  });
}
