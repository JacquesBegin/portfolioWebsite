const roadmapFrontEndData = require("../public/data/roadmapFrontEndData");
const roadmapBackEndData = require("../public/data/roadmapBackEndData");
const roadmapCoreSkillsData = require("../public/data/roadmapCoreSkillsData");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

function addUUIDToJsonData(file) {

  let searchSubtopics = (s_topic) => {
      s_topic.id = uuidv4();
      if (s_topic.subtopics) {
        for (let s_s_topic of s_topic.subtopics) {
          searchSubtopics(s_s_topic.subtopics);
        }
      }
  }

  for (let section of file.data) {
    section.id = uuidv4();
    if (section.topics.length) {
      for (let topic of section.topics) {
        topic.id = uuidv4();
        if (topic.subtopics.length) {
          for (let subtopic of topic.subtopics) {
            searchSubtopics(subtopic);
          }
        }
      }
    }
  }
  fs.writeFile(`${__dirname}/../public/json/roadmap.json`, JSON.stringify(file), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("Roadmap json file has been updated");
  });
}

// To update id's, uncomment module exports in each file.
// addUUIDToJsonData(roadmapFrontEndData);
// addUUIDToJsonData(roadmapBackEndData);
// addUUIDToJsonData(roadmapCoreSkillsData);