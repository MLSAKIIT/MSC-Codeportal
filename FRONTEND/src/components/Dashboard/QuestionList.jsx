import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import Tooltip from "react-bootstrap/Tooltip";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./QuestionList.css";
import Fade from "react-reveal/Fade";
import Spinner from "react-bootstrap/Spinner";

export default function QuestionList({ data, updateData }) {
  const [select, setSelected] = useState([]);
  const [questionsTableData, setQuestionsTableData] = useState([]);
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    let mounted = true;
    if (data !== undefined) {
      let doneQuestion = [];

      let tableData = data.questions.map((question, index) => {
        if (question.Done) {
          doneQuestion.push(index);
        }
        if (mounted) {
          return {
            id: index,
            question: (
              <>
                {/* Question link */}
                <a
                  href={question.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: "600" }}
                  className="question-link"
                >
                  {question.Problem}
                </a>
              </>
            ),

            _is_selected: question.Done,
            _search_text: question.Problem,
          };
        }
      });
      setQuestionsTableData(tableData);
      setTopicName(data.topicName);
      setSelected(doneQuestion);
      return () => (mounted = false);
    }
    return function cleanup() {
      abortController.abort();
    };
  }, [data]);
  console.log("table data : ", questionsTableData);

  // table config
  const columns = [
    {
      dataField: "id",
      text: "Q-Id",
      headerStyle: { width: "120px", fontSize: "15px" },
      headerAlign: "center",
    },
    {
      dataField: "question",
      text: "Questions",
      headerStyle: { fontSize: "15px" },
      headerAlign: "center",
    },
    {
      dataField: "_is_selected",
      text: "Is Selected",
      headerStyle: { fontSize: "15px" },
      hidden: true,
      sort: true,
    },
  ];
  const rowStyle = { fontSize: "13px" };
  const selectRow = {
    mode: "checkbox",
    style: { background: "#6ECB63" },
    selected: select,
    onSelect: handleSelect,
    hideSelectAll: true,
  };
  const sortMode = {
    dataField: "_is_selected",
    order: "asc",
  };

  // func() triggered when a question is marked done
  function handleSelect(row, isSelect) {
    let key = topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
    let newDoneQuestion = [...select];
    let updatedQuestionsStatus = data.questions.map((question, index) => {
      if (row.id === index) {
        question.Done = isSelect;
        if (isSelect) {
          newDoneQuestion.push(row.id);
        } else {
          var pos = newDoneQuestion.indexOf(row.id);
          newDoneQuestion.splice(pos, 1);
        }
        return question;
      } else {
        return question;
      }
    });
    updateData(
      key,
      {
        started: newDoneQuestion.length > 0 ? true : false,
        doneQuestions: newDoneQuestion.length,
        questions: updatedQuestionsStatus,
      },
      data.position
    );
    displayToast(isSelect, row.id);
  }

  // trigger an information message for user on select change
  function displayToast(isSelect, id) {
    const { type, icon, dir } = {
      type: isSelect ? "Done" : "Incomplete",
      icon: isSelect ? "🎉" : "🙇🏻‍♂️",
      dir: isSelect ? "👇🏻" : "👆🏻",
    };

    const title = `${isSelect ? select.length + 1 : select.length - 1}/${
      data.questions.length
    } Done ${icon}`;
    const subTitle = `Question pushed ${dir} the table.`;

    const Card = (
      <>
        <p>{title}</p>
        <p className="toast-subtitle">{subTitle}</p>
      </>
    );

    toast(Card, {
      className: `toast-${type}`,
      autoClose: 2000,
      closeButton: true,
    });
  }

  return (
    <div className="question-landing">
      <h1 className="text-center mb-4 topic-name">{topicName}</h1>

      {data === undefined ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <ToolkitProvider
          className="float-right"
          keyField="id"
          data={questionsTableData}
          columns={columns}
          rowStyle={rowStyle}
        >
          {(props) => (
            <div>
              <div className="container " style={{ overflowAnchor: "none" }}>
                <Fade duration={600}>
                  <BootstrapTable
                    {...props.baseProps}
                    selectRow={selectRow}
                    sort={sortMode}
                  />
                </Fade>
              </div>
            </div>
          )}
        </ToolkitProvider>
      )}
      <ToastContainer />
    </div>
  );
}
