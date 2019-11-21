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
      let innerHTMLDiv = document.createElement("div");
      innerHTMLDiv.className = "innerHTMLDiv";
      innerHTMLDiv.innerHTML = subtopic.name;
      listItem.appendChild(innerHTMLDiv);
      // listItem.innerHTML = subtopic.name;
      if (subtopic.subtopics.length) {
        for (const sub of subtopic.subtopics) {
          listItem.innerHTML = buildSubtopicSection(sub.subtopics);
        }
        // listItem.appendChild(buildSubtopicSection(subtopic.subtopics));
      }
      listItem.appendChild(buildLevelSelector(subtopic));
      skillSubtopicList.appendChild(listItem);
      
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
      let innerHTMLDiv = document.createElement("div");
      innerHTMLDiv.className = "innerHTMLDiv";
      innerHTMLDiv.innerHTML = topic.name;
      listItem.appendChild(innerHTMLDiv);
      listItem.appendChild(buildLevelSelector(topic));
      if (topic.subtopics.length) {
        listItem.appendChild(buildSubtopicSection(topic.subtopics));
      }
      skillSectionList.appendChild(listItem);
    }
    skillSection.appendChild(skillSectionList);
  }
  return skillSection;
}

function buildRoadmap(roadmapData) {
  let roadmaps = document.getElementById("roadmaps");
  roadmaps.innerHTML = "";
  let roadmapTitle = document.createElement("h2");
    roadmapTitle.innerHTML = roadmapData.roadmapTitle;
    roadmaps.appendChild(roadmapTitle);
  for (const data of roadmapData.data) {
    roadmaps.appendChild(buildTopicSection(data));
  }
}

function buildRoadmapButtons() {
  const panelData = [
    { 
      "title": "Front End Roadmap",
      "data": roadmapFrontEndData
    },
    {
      "title": "Back End Roadmap",
      "data": roadmapBackEndData
    },
    {
      "title": "Core Skills Roadmap",
      "data": roadmapCoreSkillsData
    }
  ];
  let allPanels = document.getElementById("roadmapPanels");
  for (let x = 0; x < panelData.length; x++) {
    let panel = document.createElement("div");
    panel.className = "roadmapPanel";
    panel.innerHTML = panelData[x]["title"];
    panel.addEventListener("click", function() {
      buildRoadmap(panelData[x]["data"]);
    })
    allPanels.appendChild(panel);
  }
}


buildRoadmapButtons();
buildRoadmap(roadmapBackEndData);

