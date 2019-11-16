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
      if (subtopic.subtopics.length) {
        for (const subtopic of subtopic.subtopics) {
          listItem.innerHTML = buildSubtopicSection(subtopic);
        }
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
      listItem.innerHTML = topic.name;
      listItem.appendChild(buildLevelSelector(topic));
      skillSectionList.appendChild(listItem);
      if (topic.subtopics.length) {
        skillSectionList.appendChild(buildSubtopicSection(topic.subtopics));
      }
      
    }
    skillSection.appendChild(skillSectionList);
  }
  
  // document.getElementById("frontEnd").appendChild(skillSection);
  return skillSection;
}

function buildRoadmap(roadmapData) {
  let frontEnd = document.getElementById("frontEnd");
  frontEnd.innerHTML = "";
  for (const data of roadmapData.data) {
    frontEnd.appendChild(buildTopicSection(data));
  }
}


// // A button to test events
document.getElementById("button").addEventListener("click", function() {
  buildRoadmap({
    "data": [
      {
        "id": "29ba1c01-423f-40f0-bc28-e7a842e3eda3",
        "sectionTitle": "HTML",
        "topics": [
          {
            "id": "adb7b2cc-73c1-428e-b95b-5324276b9e1f",
            "name": "Learn the basics",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "1c2bede9-8a42-4c07-8e24-4a1706079a3d",
            "name": "Writing Semantic HTML",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "8cdece69-d8e5-466d-9254-5f63e05322ca",
            "name": "Basic SEO",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "956c403b-bbc5-4f3c-b5ef-31aba37b2f78",
            "name": "Accessibility",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          }
        ]
      },
      {
        "id": "314d8c65-c094-4ce6-ab56-531c27eed578",
        "sectionTitle": "CSS",
        "topics": [
          {
            "id": "2ad3e5f0-d232-43a0-a91b-666ff05fb184",
            "name": "Learn the basics",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "6b784709-dbdc-400f-bead-e383e0cb4098",
            "name": "Making Layouts",
            "level": 1,
            "subtopics": [
              {
                "id": "13255cd3-28c5-4ae2-ac7a-5fb6bc84f107",
                "name": "Floats",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "33c13989-9233-4ed1-8d78-691138109537",
                "name": "Positioning",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "a15aa6e5-d64e-444e-baac-4754e54c4977",
                "name": "Display",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "f4d39c79-6149-4089-9776-99b11c53d907",
                "name": "Box Model",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "5b1f468c-5cfe-46c2-8473-a29b4d43c827",
                "name": "CSS Grid",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "e421fe6c-1d8c-480e-ad3f-fd9d647a0a97",
                "name": "Flex Box",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              }
            ],
            "resources": [],
            "examples": []
          },
          {
            "id": "fae4b4c4-bb3d-41f8-a830-53b590bfce96",
            "name": "Media Queries",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "034e9507-e86a-4f8b-be98-15a95335f565",
            "name": "Learn CSS3",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          }
        ]
      },
      {
        "id": "b3aa76a4-5349-4641-b399-19037f585b6d",
        "sectionTitle": "JavaScript",
        "topics": [
          {
            "id": "b73b6944-cec9-4370-8c4b-89f353954f06",
            "name": "Syntax and basic constructs",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "3624fe0b-f487-4e3d-be4b-52553e9dccf2",
            "name": "Learn DOM manipulation",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "7903382f-d053-4cf3-88f8-d9cf16e315b4",
            "name": "Learn Fetch API/Ajax (XHR)",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "39c898f0-ee2d-40ca-b235-35adfe7dd0b0",
            "name": "ES6+",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "06b69c46-93ac-48da-b76b-38f1cea249c2",
            "name": "Modular JavaScript",
            "level": 1,
            "subtopics": [],
            "resources": [],
            "examples": []
          },
          {
            "id": "781571e8-cf01-441d-ade6-6b7e6974f2d2",
            "name": "Specific Concepts",
            "level": 1,
            "subtopics": [
              {
                "id": "28049516-9e94-41be-ae43-c37430926519",
                "name": "Hoisting",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "41381fa7-c123-4801-a961-92398c20ffb0",
                "name": "Event Bubbling",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "63af85a7-738d-4b05-978b-435f2c150f87",
                "name": "Scope",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "6da4e00b-cba8-4447-b1a8-bbace45445eb",
                "name": "Prototype",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "4cef6076-7e5d-4977-ac79-7a144971f108",
                "name": "Shadow DOM",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "90389242-0c25-493a-a472-4a92b44a5bda",
                "name": "Strict",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "555a1f7c-88be-4e11-b2a1-7db54cb738a3",
                "name": "How browsers work",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "e994c6df-137a-44df-9ce5-194889b02712",
                "name": "DNS",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              },
              {
                "id": "afc23b2d-1020-4c3c-9489-a4447b54bf50",
                "name": "HTTP",
                "level": 1,
                "subtopics": [],
                "resources": [],
                "examples": []
              }
            ],
            "resources": [],
            "examples": []
          }
        ]
      }
    ]
  });
});



// createLevelSelector();