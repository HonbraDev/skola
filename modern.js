hashCheck();

window.navigace = 0;

console.log("test");

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);

function hashCheck() {
  if (location.hash == "#") {
    hashnavigation("main-home", 1);
  } else {
    if (location.hash == "") {
      hashnavigation("main-home", 1);
    } else {
      if (location.hash == "#start") {
        hashnavigation("main-start", 2);
      } else {
        hashnavigation("main-404", 1);
      }
    }
  }
}

function hashnavigation(locat, num) {
  hideAll();
  navigacevis(num);
  document.getElementById(locat).style.display = "initial";
}

function backHome() {
  location.hash = "#";
}

function hideAll() {
  document.getElementById("main-home").style.display = "none";
  document.getElementById("main-start").style.display = "none";
  document.getElementById("main-404").style.display = "none";
  document.getElementById("navbar").style.top = "0px";
  document.getElementById("btnBack").style.display = "none";
}

function navigacevis(num) {
  if (num == 1) {
    document
      .getElementById("navigace1")
      .classList.add("mdc-list-item--activated");
    document
      .getElementById("navigace2")
      .classList.remove("mdc-list-item--activated");
    document
      .getElementById("navigace3")
      .classList.remove("mdc-list-item--activated");
    document
      .getElementById("navigace4")
      .classList.remove("mdc-list-item--activated");
    hideNavigovat();
  } else {
    if (num == 2) {
      document
        .getElementById("navigace2")
        .classList.add("mdc-list-item--activated");
      document
        .getElementById("navigace1")
        .classList.remove("mdc-list-item--activated");
      document
        .getElementById("navigace3")
        .classList.remove("mdc-list-item--activated");
      document
        .getElementById("navigace4")
        .classList.remove("mdc-list-item--activated");
      hideNavigovat();
      document.getElementById("btnBack").style.display = "initial";
      document.getElementById("navbar").style.top = "-64px";
    } else {
      404();
    }
  }
}

function hideNavigovat() {
  if (window.navigace == 1) {
    document.getElementById("navigace").style.left = "-257px";
    window.navigace = 0;
    return;
  }
}

function navigovat() {
  if (window.navigace == 0) {
    document.getElementById("navigace").style.left = "0px";
    window.navigace = 1;
    return;
  }
  if (window.navigace == 1) {
    document.getElementById("navigace").style.left = "-257px";
    window.navigace = 0;
    return;
  }
}
