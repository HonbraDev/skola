var mdc = mdc;
const buttons = document.querySelectorAll(".hbripple");
for (const button of buttons) {
  mdc.ripple.MDCRipple.attachTo(button);
}