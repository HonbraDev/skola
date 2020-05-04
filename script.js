window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
};

// const rellax = new Rellax('.rellax');
mdc.autoInit();
const prohlidkaElem = document.querySelector(".prohlidka");
const html = document.querySelector("html");
const body = document.querySelector("body");
const prohlidka = {
  spustit: function() {
    prohlidkaElem.style.display = "initial";
    prohlidkaElem.classList.add("animated");
    prohlidkaElem.classList.add("bounceInUp");
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
    prohlidka.splash();
  },
  oprojektu: function() {
    zenscroll.intoView(document.querySelector("section"));
  },
  splash: function() {
    var splashes = [
      "Nyní s více IQ v prášku!",
      "Kompatibilní s mobily!",
      "Vytvořeno inteligenty!",
      "Dojemný příběh!!"
    ];
    var splash = splashes[Math.floor(Math.random() * splashes.length)];
    document.querySelector(".yellowtext").innerHTML = splash;
    
    document.querySelector(".yellowtext").style.display = "none"; //aby se přehrála animace
    setTimeout(function() {
      document.querySelector(".yellowtext").style.display = "block";
    }, 0);
  }
};
prohlidka.splash();
