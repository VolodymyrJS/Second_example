import main from "../twig/main.html.twig";
import header from "../twig/header.html.twig";
import footer from "../twig/footer.html.twig";
import { headerContent, footerContent, mainContent } from "./config";

var headerSection = header({ header: headerContent });
var mainSection = main() || mainContent;
var footerSection = footer({ footer: footerContent });

document.getElementsByClassName("header__content")[0].innerHTML = headerSection;
document.getElementsByClassName("main__content")[0].innerHTML = mainSection;
document.getElementsByClassName("footer__content")[0].innerHTML = footerSection;

function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".container__items--active");
  activeTabs.forEach(tab => {
    tab.className = tab.className.replace("container__items--active", "");
  });

  event.target.parentElement.className += " container__items--active";
  document.getElementsByClassName(
    event.target.href.split("#")[1]
  )[0].className += " container__items--active";
}

const element = document.getElementsByClassName("container__tabs")[0];

element.addEventListener("click", onTabClick, false);

(() => {
  var ctx = document
    .getElementsByClassName("container__items--active__first-canvas")[0]
    .getContext("2d");
  ctx.font = "bold 30px sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText("M", 10, 20);
})();

(() => {
  var ctx = document
    .getElementsByClassName("container__items--active__second-canvas")[0]
    .getContext("2d");
  ctx.font = "bold 20px sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText("R", 10, 20);
})();

(() => {
  var ctx = document
    .getElementsByClassName("container__items--active__third-canvas")[0]
    .getContext("2d");
  ctx.font = "bold 20px sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText("NS", 10, 20);
})();
