function buildLevelSelector(skillData) {
  let levelSelector = document.createElement("div");
  if (skillData.legend) {
    levelSelector.className = "levelSelectorLegend";
  } else {
    levelSelector.className = "levelSelector";
  }
  for (let x = 1; x < 6; x++) {
    let level = document.createElement("div");
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
      if (subtopic.subtopics.length) {
        listItem.appendChild(buildSubtopicSection(subtopic.subtopics));
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
    let skillSectionList = buildSubtopicSection(topicData.topics);
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

function buildLevelLegend() {
  let legendContent = [
    {
      "legend": true,
      "level": 0,
      "description": "Unfamiliar/No Previous Knowledge"
    },
    {
      "legend": true,
      "level": 1,
      "description": "Understands Purpose/Basic Use Cases"
    },
    {
      "legend": true,
      "level": 2,
      "description": "Can Use Technology/Conpects At A Basic Level"
    },
    {
      "legend": true,
      "level": 3,
      "description": "Comfortable With Technology While Using References"
    },
    {
      "legend": true,
      "level": 4,
      "description": "Strong Use of Technology/Concepts With Limited Reference Use"
    },
    {
      "legend": true,
      "level": 5,
      "description": "Capable of Using/Explaining Without Using References"
    }
  ];
  let legendDiv = document.getElementById("legend");
  let legendList = document.createElement("ul");
  legendList.className = "levelLegendList";
  legendContent.forEach((item) => {
    let legendItem = document.createElement("li");
    let levelSelector = buildLevelSelector(item);
    legendItem.appendChild(levelSelector);
    legendItem.innerHTML += ` = ${item.description}`;
    legendList.appendChild(legendItem);
  });
  legendDiv.appendChild(legendList);
}

buildLevelLegend();
buildRoadmapButtons();
buildRoadmap(roadmapFrontEndData);

