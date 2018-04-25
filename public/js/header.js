
// This will remove the active class from
// the element class attribute of the previous link
// and and it to the newly clicked link. Will work
// for cross-browser capabilities.

setActiveState = (target) => {
  let parent = target.parentNode;
  let childArrayLength = parent.children.length;
  for (let i = 0; i < childArrayLength; i++) {
    parent.children[i].className = parent.children[i].className.replace(/\bactive\b/g, "");
    parent.children[i].className = parent.children[i].className.replace(/\bresponsive\b/g, "");
  };
  let newLinkClasses = target.className.split(" ");
  if (newLinkClasses.indexOf("active") == -1) {
    target.className += ` active responsive`;
  }
}

showDropDownMenu = () => {
  let navbar = document.getElementById("navbar");
  if (navbar.className === "dropDown") {
    navbar.className = "";
  } else {
    navbar.className = "dropDown";
    // event to close the drop down menu if clicked off
    document.addEventListener("click", closeDropDown, false);
  }
}

closeDropDown = (event) => {
  let navbar = document.getElementById("navbar");
  if (event.target.id !== "navbar" || navbar.className === "dropDown") {
    navbar.className = "";
    document.removeEventListener("click", closeDropDown, false);
  }
}

$(document).on("click", "#navbar a.menuIcon", function(event) {
  event.preventDefault();
  showDropDownMenu(event);
});