const tourDiv = document.querySelector(".tour");
const welcomeScreen = document.querySelector(".welcome-screen");

addRipple(".mdc-ripple-surface");
if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}

function info() {
  zenscroll.intoView(document.querySelector(".content"));
}
function start() {
  tourDiv.style.display = "block";
  tourDiv.style.opacity = 1;
  welcomeScreen.style.display = "none";
  document.querySelector("body").classList.add("noscroll");
  
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
}
function stop() {
  tourDiv.style.opacity = 0;
  tourDiv.style.display = "none";
  welcomeScreen.style.display = "";
  document.querySelector("body").classList.remove("noscroll");
  welcomeScreen.style.animationName = "margin-animation";
}
function mensaPage() {
  window.open("https://www.mensagymnazium.cz/cs");
}

function mensaPageProjects() {
  window.open("https://www.mensagymnazium.cz/cs/vyuka/skolni-vzdelavaci-programy#footer");
}
function addRipple(selector, unbounded) {
  if (document.querySelector(selector)) {
    if (unbounded) {
      var elems = document.querySelectorAll(selector);
      for (var elem of elems) {
        var ripple = new mdc.ripple.MDCRipple(elem);
        ripple.unbounded = true;
      }
    } else {
      var elems = document.querySelectorAll(selector);
      for (var elem of elems) {
        new mdc.ripple.MDCRipple(elem);
      }
    }
  }
}
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    document.querySelector("body").classList.add("scrolled");
  } else {
    document.querySelector("body").classList.remove("scrolled");
  }
}
