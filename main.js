window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
};

// --------------------------------

var fixed = false;

function showInfo() {
  document.getElementById("info").style.display = "initial";
  document.getElementById("showInfo").style.display = "none";
  document.getElementById("hideInfo").style.display = "initial";
}

function hideInfo() {
  document.getElementById("info").style.display = "none";
  document.getElementById("showInfo").style.display = "initial";
  document.getElementById("hideInfo").style.display = "none";
}

function main() {
  document.getElementById("jsNotice").style.display = "none";
  var fixed = false;
}

function oskole() {
  document.getElementById("oskole").style.display = "initial";
  document.getElementById("radek-oskole").className = "actual";
  document.getElementById("radek-home").className = "";
}

function start() {
  document.getElementById("start").style.display = "initial";
  document.getElementById("back").style.left = "20px";
  // document.getElementById("info").style.opacity = "1";
  document.getElementById("top").style.top = "-75px";
  document.getElementById("html").style.position = "fixed";
  document.getElementById("html").style.top = "0px";
  document.getElementById("html").style.left = "999999px";
}

function zpet() {
  document.getElementById("start").style.display = "none";
  document.getElementById("back").style.left = "-100px";
  // document.getElementById("info").style.opacity = "0";
  document.getElementById("top").style.top = "0px";
  document.getElementById("html").style.position = "initial";
  document.getElementById("html").style.top = "initial";
  document.getElementById("html").style.left = "initial";
}

function fixinfo() {
  /* if (fixed) {
    document.getElementById("info").style.bottom = null;
    document.getElementById("info-p").style.opacity = null;
    document.getElementById("info-p").style.marginTop = null;
  } else {
    document.getElementById("info").style.bottom = "0px";
    document.getElementById("info-p").style.opacity = "1";
    document.getElementById("info-p").style.marginTop = "10px";
  }
  fixed = !fixed; */
}

function domu() {
  document.getElementById("oskole").style.display = "none";
  document.getElementById("radek-home").className = "actual";
  document.getElementById("radek-oskole").className = "";
}
