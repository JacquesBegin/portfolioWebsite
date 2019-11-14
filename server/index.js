const roadmapData = require("../public/json/roadmap");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

function addUUIDToTopics(file) {
  console.log(typeof file);
  for (let section of file.data) {
    for (let topic in section.topics) {
      section.topics[topic].id = uuidv4();
      console.log(section.topics[topic]);
    }
  }
  fs.writeFile(`${__dirname}/../public/json/roadmap.json`, JSON.stringify(file), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("Roadmap json file has been updated");
  });
  console.log(typeof JSON.stringify(file));
}

// addUUIDToTopics(roadmapData);