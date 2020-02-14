function shareWhatsapp() {
  window.open("whatsapp://send?text=https://bit.ly/hbskola");
}

function hashChange() {
  document.getElementById("indexFrame").src = location.hash.substr(1) + ".html";
}
