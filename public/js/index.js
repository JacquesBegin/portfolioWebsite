window.onscroll = function() {removeTitleHeader()};

window.addEventListener("resize", () => {
  console.log("hi");
});

function removeTitleHeader() {
  let name = document.getElementsByClassName("navbar__nameContent__name")[0];
  let title = document.getElementsByClassName("navbar__nameContent__title")[0];
  if (window.innerWidth <= 500) {
    if (document.body.scrollTop > 58 || document.documentElement.scrollTop > 58) {
      // title.style.display = "none";
      // name.style.fontSize = "2.5em";
      title.style.fontSize = "0";
    } else {
      // title.style.display = "block";
      // name.style.fontSize = "3em";
      title.style.fontSize = "1.1em";
    }
  }
}

