window.onscroll = function() {removeTitleHeader()};

function removeTitleHeader() {
  let title = document.getElementsByClassName("navbar__nameContent__title")[0];
  if (document.body.scrollTop > 58 || document.documentElement.scrollTop > 58) {
    // title.style.display = "none";
    title.style.fontSize = "0";
  } else {
    // title.style.display = "block";
    title.style.fontSize = "1.2em";
  }
}