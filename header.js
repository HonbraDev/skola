document.write('<aside class="mdc-drawer mdc-drawer--modal">\n');
document.write('      <div class="mdc-drawer__header">\n');
document.write('        <h3 class="mdc-drawer__title">Mapa školy</h3>\n');
document.write(
  '        <h6 class="mdc-drawer__subtitle" id="navnadpis">Honbra a Akronym</h6>\n'
);
document.write("      </div>\n");
document.write('      <div class="mdc-drawer__content">\n');
document.write('        <div class="mdc-list">\n');
document.write('          <a class="mdc-list-item mdc-list-item--activated" aria-current="page" href="#" id="item-home">\n');
document.write(
  '            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">home</i>\n'
);
document.write('            <span class="mdc-list-item__text">Domů</span>\n');
document.write("          </a>\n");
document.write('          <a class="mdc-list-item" href="#mapa" id="item-mapa">\n');
document.write(
  '            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">3d_rotation</i>\n'
);
document.write(
  '            <span class="mdc-list-item__text">Mapa</span>\n'
);
document.write("          </a>\n");
document.write('          <a class="mdc-list-item" href="#info">\n');
document.write(
  '            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>\n'
);
document.write('            <span class="mdc-list-item__text">O projektu</span>\n');
document.write("          </a>\n");
document.write('          <hr class="mdc-list-divider" />\n');
document.write('          <a class="mdc-list-item" href="#chyba">\n');
document.write(
  '            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bug_report</i>\n'
);
document.write(
  '            <span class="mdc-list-item__text">Nahlásit chybu</span>\n'
);
document.write("          </a>\n");
document.write('          <a class="mdc-list-item" href="#nazor">\n');
document.write(
  '            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">feedback</i>\n'
);
document.write(
  '            <span class="mdc-list-item__text">Váš názor</span>\n'
);
document.write("          </a>\n");
document.write("        </div>\n");
document.write("      </div>\n");
document.write("    </aside>\n");
document.write('    <div class="mdc-drawer-scrim"></div>\n');
document.write('    <div class="mdc-drawer-app-content">\n');
document.write(
  '      <header class="mdc-top-app-bar app-bar" id="app-bar">\n'
);
document.write('        <div class="mdc-top-app-bar__row">\n');
document.write(
  '          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">\n'
);
document.write(
  '            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>\n'
);
document.write(
  '            <span class="mdc-top-app-bar__title">Mapa školy</span>\n'
);
document.write("          </section>\n");
document.write("        </div>\n");
document.write("      </header>\n");
document.write("\n");
document.write('      <main class="main-content" id="main-content">\n');
document.write('        <div class="mdc-top-app-bar--fixed-adjust">');

function footer() {
  document.write("        </div>\n");
  document.write("      </main>\n");
  document.write("    </div>");
}
