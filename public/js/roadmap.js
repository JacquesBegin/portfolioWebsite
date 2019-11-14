function createLevelSelector() {
  let rating = document.getElementById("levelSelector");
  // console.log(rating);
    for(let node of rating.children) {
      node.addEventListener("click", function() {
        console.log(this.style);
        let box = this.style.backgroundColor = "#00ffbf"
        
      })
    }
}



createLevelSelector();