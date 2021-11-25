import Localbase from "localbase";
import QuestionData, { version } from "../sheets/striver.js";
let db = new Localbase("db");
window.db = db;
db.config.debug = false;
const localVersion = localStorage.getItem("Striverversion");
window.localVersion = localVersion;
window.version = version;

export function insertData(callback) {
  QuestionData.forEach((topic, index) => {
    db.collection("StriverArchive").add(
      topic,
      topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()
    );
  });
  getData(callback);
}

export function getData(callback) {
  db.collection("StriverArchive")
    .get()
    .then((data) => {
      if (data.length === 0) {
        insertData(callback);
      } else {
        data.sort((a, b) => {
          return a.position - b.position;
        });
        if (localVersion === null || localVersion === undefined) {
          localStorage.setItem("Striverversion", 100000000);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }

        if (parseInt(localVersion) !== version) {
          let i = 0;
          for (let topic of data) {
            let dataFromJSON = QuestionData[i].questions;
            let len = dataFromJSON.length;
            let key = topic.topicName
              .replace(/[^A-Z0-9]+/gi, "_")
              .toLowerCase();
            topic.questions.forEach((qObj, index) => {
              if (index < len) {
                if (qObj.Done) {
                  dataFromJSON[index]["Done"] = true;
                }
                if (qObj.hasOwnProperty("Bookmark")) {
                  dataFromJSON[index]["Bookmark"] = qObj.Bookmark;
                } else {
                  dataFromJSON[index]["Bookmark"] = false;
                }
                if (qObj.hasOwnProperty("Notes")) {
                  dataFromJSON[index]["Notes"] = qObj.Notes;
                } else {
                  dataFromJSON[index]["Notes"] = "";
                }
              }
            });
            updateDBData(key, {
              started: topic.started,
              doneQuestions: topic.doneQuestions,
              questions: dataFromJSON,
            });
            i++;
          }
          localStorage.setItem("Striverversion", version);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          return callback(data);
        }
      }
    });
}

export function getTopicData(key, callback) {
  db.collection("StriverArchive")
    .doc(key)
    .get()
    .then((document) => {
      callback(document);
    });
}

export function updateDBData(key, updateData) {
  db.collection("StriverArchive").doc(key).update(updateData);
}
