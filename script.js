const items = document.querySelectorAll(".motion-flares div");
const contianer = document.querySelector(".motion-flares");
const body = document.querySelector("body");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".slider img");
let widths = [];
let isAtRightEnd =
  Math.abs(slider.scrollWidth - slider.clientWidth - slider.scrollLeft) <= 1,
  isLeftEnd=slider.scrollLeft==0
imgs.forEach((img) => {
  widths.push(img.clientWidth);
});
function get(i = 0) {
  let current = widths[i];
  if (i < widths.length) {
    i++;
    return widths[i - 1];
  } else {
    return get((i %= widths.length));
  }
}
setInterval(() => {
  items.forEach((item) => {
    item.style.opacity = Math.random();
    item.style.transform = `translate(${Math.round(Math.random() * contianer.clientWidth)}px,${Math.round(Math.random() * contianer.clientWidth)}px)`;
  });
}, 1000);
const currentWidth=slider.scrollWidth/widths.length
// left.onclick = () => {
//    slider.scrollBy({
//     left: currentWidth,
//     behavior: "smooth",})
//   isAtRightEnd =
//     Math.abs(slider.scrollWidth-slider.clientWidth==slider.scrollLeft);
//     isLeftEnd =slider.scrollLeft==0
//   if (isAtRightEnd) {
//     left.style.display = "none";
//     right.style.display = "grid";
//   }
// };

// right.onclick = () => {
//     slider.scrollBy({
//     left: -currentWidth,
//     behavior: "smooth",})
//     isAtRightEnd =
//     Math.abs(slider.scrollWidth-slider.clientWidth==slider.scrollLeft);
//   isLeftEnd =slider.scrollLeft==0
//   if (isLeftEnd) {
//     left.style.display = "grid";
//     right.style.display = "none";
//   }
// };
