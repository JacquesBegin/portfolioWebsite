window.onscroll = function() {shrinkHeader()};

function shrinkHeader() {
  let title = document.getElementsByClassName("navbar__nameContent__title")[0];
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    title.style.display = "none";
  } else {
    title.style.display = "block";
  }
}