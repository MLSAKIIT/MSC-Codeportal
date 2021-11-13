import React, { useState, useEffect, useContext } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./QuestionList.css";

export default function QuestionList({ data, updateData }) {
  const [select, setSelected] = useState([]);
  const [questionsTableData, setQuestionsTableData] = useState([]);
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    if (data !== undefined) {
      let doneQuestion = [];

      let tableData = data.questions.map((question, index) => {
        if (question.Done) {
          doneQuestion.push(index);
        }

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
      });
      setQuestionsTableData(tableData);
      setTopicName(data.topicName);
      setSelected(doneQuestion);
    }
  }, [data]);

  // table config
  const columns = [
    {
      dataField: "id",
      text: "Q-Id",
      headerStyle: { width: "160px", fontSize: "20px" },
      headerAlign: "center",
    },
    {
      dataField: "question",
      text: "Questions",
      headerStyle: { fontSize: "20px" },
      headerAlign: "center",
    },
    {
      dataField: "_is_selected",
      text: "Is Selected",
      headerStyle: { fontSize: "20px" },
      hidden: true,
      sort: true,
    },
    {
      dataField: "_search_text",
      text: "Search Text",
      headerStyle: { fontSize: "20px" },
      hidden: true,
    },
  ];
  const rowStyle = { fontSize: "20px" };
  const selectRow = {
    mode: "checkbox",
    style: { background: "#c8e6c9" },
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
    <>
      <h3 className="text-center mb-4">
        <Link to="/">Topics</Link>/{topicName}
      </h3>

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
          search
        >
          {(props) => (
            <div>
              {/* <div className="header-rand">
                {SearchBar({ ...props.searchProps })}
              </div> */}
              <div className="container " style={{ overflowAnchor: "none" }}>
                <BootstrapTable
                  {...props.baseProps}
                  selectRow={selectRow}
                  sort={sortMode}
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
      )}
      <ToastContainer />
    </>
  );
}
