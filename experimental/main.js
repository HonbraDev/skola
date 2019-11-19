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
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) { /* Firefox */
elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE/Edge */
elem.msRequestFullscreen();
}
}
