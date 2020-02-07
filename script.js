if (document.cookie == "dark") {
  darkmode();
} else {
  lightmode();
}

function fullscreen() {
  var iFrame = document.getElementById("iFrame");
  var fullScreen = document.getElementById("fullscreen");
  var exitFull = document.getElementById("exitfull");
  var body = document.getElementById("body");
  iFrame.style.position = "fixed";
  iFrame.style.height = "100%";
  iFrame.style.width = "100%";
  iFrame.style.top = "0px";
  iFrame.style.left = "0px";
  iFrame.style.maxWidth = "initial";
  iFrame.style.padding = "0px";
  fullScreen.style.display = "none";
  exitFull.style.display = "initial";
  body.style.overflow = "hidden";
}

function exitfull() {
  var iFrame = document.getElementById("iFrame");
  var fullScreen = document.getElementById("fullscreen");
  var exitFull = document.getElementById("exitfull");
  var body = document.getElementById("top");
  iFrame.style.position = "";
  iFrame.style.height = "";
  iFrame.style.width = "";
  iFrame.style.top = "";
  iFrame.style.left = "";
  iFrame.style.maxWidth = "";
  iFrame.style.padding = "";
  fullScreen.style.display = "";
  exitFull.style.display = "";
  body.style.overflow = "";
}

function darkmode() {
  var bg = document.getElementById("bg");
  var darkbtn = document.getElementById("darkbtn");
  var lightbtn = document.getElementById("lightbtn");
  bg.style.backgroundColor = "#121212";
  darkbtn.style.display = "none";
  lightbtn.style.display = "initial";
  document.cookie = "dark";
}

function lightmode() {
  var bg = document.getElementById("bg");
  var darkbtn = document.getElementById("darkbtn");
  var lightbtn = document.getElementById("lightbtn");
  bg.style.backgroundColor = "";
  darkbtn.style.display = "initial";
  lightbtn.style.display = "none";
  document.cookie = "light";
}