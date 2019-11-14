function createLevelSelector(skillData) {
  let levelSelector = document.createElement("div");
  levelSelector.id = skillData.id;
  for (let x = 1; x < 6; x++) {
    let level = document.createElement("div");
    level.id = `${skillData.id}level${x}`;
    level.className = "level";
    if (x <= skillData.level) {
      level.style.backgroundColor = "#00ffbf";
    }
    levelSelector.appendChild(level);
  }
  // document.getElementById("frontEnd").appendChild(levelSelector);
}


// A button to test events
// document.getElementById("button").addEventListener("click", function() {
//   createLevelSelector({
//     "id": "8bd38fa4-c7d1-44f7-bd82-e6071f932551",
//     "name": "Learn the basics",
//     "level": 1,
//     "resources": [],
//     "examples": []
//   });
// });



// createLevelSelector();