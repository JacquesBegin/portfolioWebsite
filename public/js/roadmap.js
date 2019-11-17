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

function buildSubtopicSection(subtopicsData) {
  let skillSubtopicList = document.createElement("ul");
    for (const subtopic of subtopicsData) {
      let listItem = document.createElement("li");
      listItem.innerHTML = subtopic.name;
      listItem.appendChild(buildLevelSelector(subtopic));
      skillSubtopicList.appendChild(listItem);
      if (subtopic.subtopics.length) {
          skillSubtopicList.appendChild(buildSubtopicSection(subtopic.subtopics));
      }
    }
  return skillSubtopicList;
}

function buildTopicSection(topicData) {
  let skillSection = document.createElement("div");
  skillSection.className = "topicSection";
  skillSection.id = topicData.id;
  let skillSectionTitle = document.createElement("h3");
  skillSectionTitle.className = "skillSectionTitle";
  skillSectionTitle.innerHTML = topicData.sectionTitle;
  skillSection.appendChild(skillSectionTitle);
  if (topicData.topics.length) {
    let skillSectionList = document.createElement("ul");
    for (const topic of topicData.topics) {
      let listItem = document.createElement("li");
      listItem.innerHTML = topic.name;
      listItem.appendChild(buildLevelSelector(topic));
      skillSectionList.appendChild(listItem);
      if (topic.subtopics.length) {
        skillSectionList.appendChild(buildSubtopicSection(topic.subtopics));
      }
    }
    skillSection.appendChild(skillSectionList);
  }
  return skillSection;
}

function buildRoadmap(roadmapData) {
  let frontEnd = document.getElementById("frontEnd");
  for (const data of roadmapData.data) {
    frontEnd.appendChild(buildTopicSection(data));
  }
}

function buildRoadmapButtons() {
  const panelNames = ["Front End Roadmap", "Back End Roadmap", "Core Skills Roadmap"];
  let allPanels = document.getElementById("roadmapPanels");
  for (let x = 0; x < panelNames.length; x++) {
    let panel = document.createElement("div");
    panel.className = "roadmapPanel";
    panel.innerHTML = panelNames[x];
    allPanels.appendChild(panel);
  }
}


buildRoadmapButtons();
buildRoadmap(roadmapFullData);

