var mdc = mdc;
const buttons = document.querySelectorAll(".mdc-ripple-surface");
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topappbar.MDCTopAppBar(topAppBarElement);