// const rellax = new Rellax('.rellax');
mdc.autoInit();
const prohlidkaElem = document.querySelector(".prohlidka");
const html = document.querySelector("html");
const body = document.querySelector("body");
const prohlidka = {
  spustit: function() {
    prohlidkaElem.style.display = "initial";
    prohlidkaElem.classList.add("animated");
    prohlidkaElem.classList.add("bounceIn");
    setTimeout(function() {
      prohlidkaElem.classList.remove("bounceIn");
      html.scrollTop = 0;
    }, 2000);
    html.classList.add("noscroll");
  },
  vypadni: function() {
    prohlidkaElem.classList.add("bounceOut");
    setTimeout(function() {
      prohlidkaElem.classList.remove("bounceOut");
      prohlidkaElem.style.display = "none";
    }, 1000);
    html.classList.remove("noscroll");
  },
  oprojektu: function() {
    zenscroll.intoView(document.querySelector("section"));
  }
};
