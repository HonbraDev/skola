hashChange();

if (document.getElementById("app-bar")) {
const drawer = mdc.drawer.MDCDrawer.attachTo(
  document.querySelector(".mdc-drawer")
);

const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(
  document.getElementById("app-bar")
);
topAppBar.setScrollTarget(document.getElementById("main-content"));
topAppBar.listen("MDCTopAppBar:nav", () => {
  drawer.open = !drawer.open;
});
}

addRippleToClass("mdc-list-item");
addRippleToClass("mdc-button");
addRippleToClass("mdc-buttond");

function addRippleToClass(y) {
  if (document.querySelector("." + y)) {
    var elems = document.querySelectorAll("." + y);
    for (var elem of elems) {
      mdc.ripple.MDCRipple.attachTo(elem);
    }
  } else {
    console.log("Element with class \"" + y + "\" not found.")
  }
}

function hashChange() {
  if (location.hash == "#") {
    hashnavigation("main-home", 1);
  } else {
    if (location.hash == "") {
      hashnavigation("main-home", 1);
      location.href = "#";
    } else {
      if (location.hash == "#mapa") {
        hashnavigation("main-start", 2);
      } else {
        if (location.hash == "#info") {
          hashnavigation("main-info", 3);
        } else {
          hashnavigation("main-404", 1);
        }
      }
    }
  }
}

function hashnavigation(locat, num) {
  hideAll();
  document.getElementById(locat).style.display = "flex";
}

function hideAll() {
  document.getElementById("main-home").style.display = "none";
  document.getElementById("main-404").style.display = "none";
  document.getElementById("app-bar").style.display = "initial";
  document.getElementById("btnBack").style.display = "none";
  document.getElementById("main-info").style.display = "none";
  document.getElementById("main-start").style.display = "none";
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
      document.getElementById("btnBack").style.display = "initial";
      document.getElementById("app-bar").style.display = "none";
    } else {
      if (num == 3) {
        document
          .getElementById("navigace2")
          .classList.remove("mdc-list-item--activated");
        document
          .getElementById("navigace1")
          .classList.remove("mdc-list-item--activated");
        document
          .getElementById("navigace3")
          .classList.add("mdc-list-item--activated");
        document
          .getElementById("navigace4")
          .classList.remove("mdc-list-item--activated");
        document.getElementById("btnBack").style.display = "initial";
        document.getElementById("app-bar").style.display = "none";
      } else {
        404();
      }
    }
  }
}

function visMapa() {
  document.getElementById("item-mapa").classList.add("mdc-list-item--activated");
  document.getElementById("item-mapa").setAttribute("aria-current", "page");
  document.getElementById("item-home").classList.remove("mdc-list-item--activated");
  document.getElementById("item-home").setAttribute("aria-current", "false");
}