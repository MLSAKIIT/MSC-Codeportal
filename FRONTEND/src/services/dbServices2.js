import Localbase from "localbase";
import QuestionData2, { version } from "../sheets/DSAsheetbyFraz";
let db = new Localbase("db");
window.db = db;
db.config.debug = false;
const localVersion = localStorage.getItem("");
window.localVersion = localVersion;
window.version = version;

//insert function for sheet 2
export function insertData2(callback) {
  QuestionData2.forEach((topic, index) => {
    db.collection("DSAsheetbyFraz").add(
      topic,
      topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()
    );
  });
  getData2(callback);
}

//get data for sheet 1
export function getData2(callback) {
  db.collection("DSAsheetbyFraz")
    .get()
    .then((data) => {
      if (data.length === 0) {
        insertData2(callback);
      } else {
        data.sort((a, b) => {
          return a.position - b.position;
        });
        if (localVersion === null || localVersion === undefined) {
          localStorage.setItem("DSAsheetbyFraz", 100000000);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }

        if (parseInt(localVersion) !== version) {
          let i = 0;
          for (let topic of data) {
            let dataFromJSON = QuestionData2[i].questions;
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
            updateDBData2(key, {
              started: topic.started,
              doneQuestions: topic.doneQuestions,
              questions: dataFromJSON,
            });
            i++;
          }
          localStorage.setItem("DSAsheetbyFraz", version);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          return callback(data);
        }
      }
    });
}

//get topic data for sheet 1
export function getTopicData2(key, callback) {
  db.collection("DSAsheetbyFraz")
    .doc(key)
    .get()
    .then((document) => {
      callback(document);
    });
}

//
export function updateDBData2(key, updateData) {
  db.collection("DSAsheetbyFraz").doc(key).update(updateData);
}

export function resetDBData2(callback) {
  db.collection("DSAsheetbyFraz")
    .delete()
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.log("There was an error, do something else", error);
    });
}

export function exportDBData2(callback) {
  db.collection("DSAsheetbyFraz")
    .get()
    .then((data) => {
      callback(data);
    });
}

export function importDBData2(data, callback) {
  resetDBData2((response) => {
    new Promise((resolve, reject) => {
      data.forEach((topic, index) => {
        db.collection("DSAsheetbyFraz").add(
          topic,
          topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()
        );
        if (index === data.length - 1) {
          resolve();
        }
      });
    }).then(() => {
      getData2((data) => {
        callback(data);
      });
    });
  });
}
