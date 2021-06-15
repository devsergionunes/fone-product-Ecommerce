export default function initOutsideEvent(navmenu, buttonmenu, eventos, callbeck) {
  const html = document.documentElement;
  const outside = 'data-outside';
  function removeclick(event) {
    if (!navmenu.contains(event.target) && !buttonmenu.contains(event.target)) {
      eventos.forEach((evento) => {
        html.removeEventListener(evento, removeclick);
      });
      buttonmenu.removeAttribute(outside);
      callbeck();
    }
  }
  if (!buttonmenu.hasAttribute(outside)) {
    setTimeout(() => {
      eventos.forEach((evento) => {
        html.addEventListener(evento, removeclick);
      });
    });
  }
  buttonmenu.setAttribute(outside, '');
}
