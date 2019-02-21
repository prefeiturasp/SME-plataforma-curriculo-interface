export default function getWindowWidth() {
  return window.innerWidth > 0 ? window.innerWidth : window.screen.width;
};
