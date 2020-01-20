hashCheck();

window.navigace = 0;

console.log("test");

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
var usr = url.searchParams.get("username");
console.log(c);

if (usr == null) {
} else {
  document.getElementById("navnadpis").innerHTML = "Mapa školy - " + usr;
}

function hashCheck() {
  if (location.hash == "#") {
    hashnavigation("main-home", 1);
  } else {
    if (location.hash == "") {
      hashnavigation("main-home", 1);
      location.href = "#";
    } else {
      if (location.hash == "#start") {
        hashnavigation("main-start", 2);
        document.getElementById("infopruh").style.display = "initial";
        document.getElementById("infopruh").style.bottom = "0px";
        document.getElementById("main-start").style.opacity = "1";
        document.getElementById("main-start").style.top = "0px";
      } else {
        hashnavigation("main-404", 1);
      }
    }
  }
}

if (c == "") {
  document.getElementById("main-start").src =
    "https://honbraofficial.github.io/skola2/app.html#0";
} else {
  if (c == "00") {
    notfound();
  } else {
    if (c == "01") {
      iframehash(0);
    } else {
      if (c == "02") {
        iframehash(1);
      } else {
        if (c == "03") {
          notfound();
        } else {
          if (c == "04") {
            notfound();
          } else {
            if (c == "05") {
              iframehash(2);
            } else {
              if (c == "11") {
                iframehash(3);
              } else {
                if (c == "12") {
                  notfound();
                } else {
                  if (c == "13") {
                    notfound();
                  } else {
                    if (c == "14") {
                      notfound();
                    } else {
                      if (c == "21") {
                        iframehash(5);
                      } else {
                        if (c == "22") {
                          notfound();
                        } else {
                          if (c == "23") {
                            iframehash(6);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function iframehash(h) {
  document.getElementById("main-start").src =
    "https://honbraofficial.github.io/skola2/app.html#" + h;
}

function notfound() {
  location.hash = "404";
}

/* document.getElementById("main-start").src =
    "https://honbraofficial.github.io/skola2/app.html#" + c; */

function hashnavigation(locat, num) {
  hideAll();
  navigacevis(num);
  document.getElementById(locat).style.display = "initial";
}

function backHome() {
  location.hash = "#";
  backHomedve();
  document.getElementById("main-start").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("main-start").style.display = "none";
  }, 400);
}

function hideAll() {
  document.getElementById("main-home").style.display = "none";
  document.getElementById("main-404").style.display = "none";
  document.getElementById("navbar").style.top = "0px";
  document.getElementById("btnBack").style.display = "none";
  document.getElementById("infopruh").style.bottom = "-80px";
}

function backHomedve() {
  document.getElementById("main-start").style.top = "-100px";
  setTimeout(function() {
    document.getElementById("main-start").style.top = "100px";
  }, 400);
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
    document.getElementById("navigace").style.left = "-270px";
    document.getElementById("navbg").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("navbg").style.display = "none";
    }, 400);
    window.navigace = 0;
    return;
  }
}

function navigovat() {
  if (window.navigace == 0) {
    document.getElementById("navigace").style.left = "0px";
    document.getElementById("navbg").style.display = "inline";
    document.getElementById("navbg").style.opacity = "1";
    window.navigace = 1;
    return;
  }
  if (window.navigace == 1) {
    document.getElementById("navigace").style.left = "-270px";
    document.getElementById("navbg").style.right = "";
    window.navigace = 0;
    return;
  }
}
