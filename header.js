function header(x) {
document.write("<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">");
document.write("<header class=\"mdl-layout__header\">");
document.write("<div class=\"mdl-layout__header-row\">");
document.write("<div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect\">");
document.write("<i class=\"material-icons\">menu<\/i>");
document.write("<\/div>");
document.write("<span class=\"mdl-layout-title pointer\" onclick=\"location.hash = 'home'\">Mapa školy<\/span>");
document.write("<div class=\"mdl-layout-spacer\"><\/div>");
document.write("<button id=\"sharemenu\" class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect\">");
document.write("<i class=\"material-icons\">share<\/i>");
document.write("<\/button>");
document.write("<ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"sharemenu\">");
document.write("<li class=\"mdl-menu__item\" onclick=\"copyStringToClipboard('http:\/\/bit.ly\/hbskola')\">Copy link<\/li>");
document.write("<li class=\"mdl-menu__item\" onclick=\"shareWhatsapp()\"> WhatsApp<\/li>");
document.write("<\/ul>");
document.write("<\/div>");
document.write("<\/header>");
document.write("<div class=\"mdl-layout__drawer\">");
document.write("<span class=\"mdl-layout-title pointer\" onclick=\"location.hash = 'home'\">Mapa školy<\/span>");
document.write("<nav class=\"mdl-navigation\">");
document.write("<a class=\"mdl-navigation__link\" href=\"#home\" id=\"menu1\">Domů<\/a>");
document.write("<a class=\"mdl-navigation__link\" href=\"#mapa\" id=\"menu2\">Mapa<\/a>");
document.write("<a class=\"mdl-navigation__link\" href=\"#oprojektu\" id=\"menu3\">O projektu<\/a>");
document.write("<a class=\"mdl-navigation__link\" href=\"#source\" id=\"menu4\">Zdrojový kód<\/a>");
document.write("<\/nav>");
document.write("<\/div>");
document.write("<main class=\"mdl-layout__content\">");
document.write("<div class=\"page-content\">");
}

function footer() {
  document.write("</div></main></div>");
}

function background() {
  document.write(
    '<div class="area"> <ul class="circles"> <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul> </div>'
  );
}

document.getElementById("title").innerHTML = "Mapa školy";
