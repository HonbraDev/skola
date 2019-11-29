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
document.write("<p class=ver id=ver>Commit 120</p>")
}
function fullScreen() {
elem.requestFullscreen();
elem.mozRequestFullScreen();
elem.webkitRequestFullscreen();
elem.msRequestFullscreen();
}
function start() {
document.getElementById("start").style.top = "0";
document.getElementById("start").src = "0p.html";
document.getElementById("x").style.bottom = "60px";
document.getElementById("ver").style.top = "-120px";
}
function stop() {
document.getElementById("start").style.top = "100vh";
document.getElementById("start").src = "";
document.getElementById("x").style.bottom = "-60px";
document.getElementById("ver").style.top = "20px";
}