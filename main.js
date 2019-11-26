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
document.write("<p class=ver>Commit 109</p>")
}
function fullScreen() {
elem.requestFullscreen();
elem.mozRequestFullScreen();
elem.webkitRequestFullscreen();
elem.msRequestFullscreen();
}
