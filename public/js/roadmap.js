function buildLevelSelector(skillData) {
  let levelSelector = document.createElement("div");
  levelSelector.id = skillData.id;
  levelSelector.className = "levelSelector";
  for (let x = 1; x < 6; x++) {
    let level = document.createElement("div");
    level.id = `${skillData.id}level${x}`;
    level.className = "level";
    if (x <= skillData.level) {
      level.style.backgroundColor = "#00ffbf";
    }
    levelSelector.appendChild(level);
  }
  return levelSelector;
}

function buildTopicSection(topicData) {
  let skillSection = document.createElement("div");
  skillSection.id = topicData.id;
  let skillSectionTitle = document.createElement("h3");
  skillSectionTitle.className = "skillSectionTitle";
  skillSectionTitle.innerHTML = topicData.sectionTitle;
  skillSection.appendChild(skillSectionTitle);
  let skillSectionList = document.createElement("ul");
  for (const topic of topicData.topics) {
    let listItem = document.createElement("li");
    listItem.innerHTML = topic.name;
    listItem.appendChild(buildLevelSelector(topic));
    skillSectionList.appendChild(listItem);
  }
  skillSection.appendChild(skillSectionList);
  // document.getElementById("frontEnd").appendChild(skillSection);
  return skillSection;
}

function buildRoadmap(roadmapData) {
  let frontEnd = document.getElementById("frontEnd");
  for (const data of roadmapData.data) {
    frontEnd.appendChild(buildTopicSection(data));
  }
}


// // A button to test events
document.getElementById("button").addEventListener("click", function() {
  buildRoadmap({
    "data": [
      {
        "id": "26edae83-a6b2-4d53-bfdc-b26e301189f3",
        "sectionTitle": "HTML",
        "topics": [
          {
            "id": "8bd38fa4-c7d1-44f7-bd82-e6071f932551",
            "name": "Learn the basics",
            "level": 1,
            "resources": [],
            "examples": []
          },
          {
            "id": "76cc137b-eb00-4504-a70d-cd5a14c90398",
            "name": "Writing Semantic HTML",
            "level": 1,
            "resources": [],
            "examples": []
          },
          {
            "id": "a564b055-aeee-4eef-a82a-685367263141",
            "name": "Basic SEO",
            "level": 1,
            "resources": [],
            "examples": []
          },
          {
            "id": "6038e35d-90b0-4126-8f7a-a2b7bd27ca94",
            "name": "Accessibility",
            "level": 1,
            "resources": [],
            "examples": []
          }
        ]
      }
    ]
  });
});



// createLevelSelector();