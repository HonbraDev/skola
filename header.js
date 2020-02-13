function header(x) {
  document.write(
    '<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" > <header class="mdl-layout__header"> </header><div class="mdl-layout__drawer"> <span class="mdl-layout-title">Mapa školy</span> <nav class="mdl-navigation"> <a class="mdl-navigation__link" href="index.html" id="menu1">Domů</a> <a class="mdl-navigation__link" href="mapa.html" id="menu2">Mapa</a> <a class="mdl-navigation__link" href="oprojektu.html" id="menu3" >O projektu</a > <a class="mdl-navigation__link" href="source.html" id="menu4" >Zdrojový kód</a > </nav></div> <main class="mdl-layout__content"><div class="page-content">'
  );
  document.getElementById("menu" + x).classList.add("active");
}

function footer() {
  document.write("</div></main></div>");
}

function background() {
  document.write(
    '<div class="area"> <ul class="circles"> <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul> </div>'
  );
}

document.getElementById("head").innerHTML =
  document.getElementById("head").innerHTML + "<title>Mapa školy</title>";
