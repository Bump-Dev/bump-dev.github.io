const sections = document.getElementsByTagName("section");
var currentSection = 1;
window.onscroll = function (e) {
  if (this.scrollY > this.oldScroll && currentSection != sections.length) {
    currentSection++;
  } else if (this.scrollY < this.oldScroll && currentSection != 1) {
    currentSection--;
  }
  document.getElementById(currentSection).scrollIntoView();
  this.oldScroll = this.scrollY;
};
