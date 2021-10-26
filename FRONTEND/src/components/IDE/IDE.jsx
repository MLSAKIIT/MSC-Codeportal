import { React, useState } from 'react'
import './IDE.css';
import langScripts from '../IDE/langScripts'
import qodeide from "../IDE/qodeide.png"

import { Row, Col, Button, Form, Dropdown } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Loader from "react-loader-spinner";

import { usePromiseTracker, trackPromise } from "react-promise-tracker";


function IDE() {

  //defining states
  const [code, setCode] = useState("")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [responseCode, setResponseCode] = useState("")

  //fetching and storing language scripts in fileName state
  const [fileName, setFileName] = useState("cplusplus.cpp");

  const file = langScripts[fileName];

  //monaco editor handle change function
  function handleEditorChange(value) {
    setCode(value);
  }

  //code run function
  async function handleSubmit(e) {
    console.log(JSON.stringify(code));

    console.log(JSON.stringify(input))

    console.log(fileName)

    try {

      const response = await trackPromise(fetch('https://qode-msc.herokuapp.com/api/qode/qode-compiler', {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          script: code,
          stdin: input,
          language: file.languageCode,
          versionIndex: "3"
        })
      }))

      const result = await response.json()

      //console logs for testing
      console.log(result)

      //updating state with fetched results
      setOutput(result.results.output)
      setResponseCode(result.results.memory)

    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="ide">

      <div className="ide-toolbar">
        <img className="qodeide-logo" src={qodeide} />

        <div className="selection-console">
          <Button className="run-btn" variant="outline-primary" href="/" size="lg" >Back Home</Button>

          <Dropdown className="lang-selector">
            <Dropdown.Toggle className="lang-selector-btn">
              {(file || {}).name}
            </Dropdown.Toggle>

            <Dropdown.Menu className="lang-selector-menu" variant="dark">
              <Dropdown.Item onClick={() => setFileName("cplusplus.cpp")}>C++</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("c.c")}>C</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("java.java")}>JAVA</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("python.py")}>PYTHON</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <Button className="run-btn running" variant="success" size="lg" onClick={() => setFileName("java.java")}>Java  </Button>
          <Button className="run-btn running" variant="success" size="lg" onClick={() => setFileName("python.py")}>Python  </Button> */}

          <Button className="run-btn running" variant="success" size="lg" onClick={e => handleSubmit()}><LoaderButton />  </Button>
        </div>
      </div>

      <Row>
        <Col md={8} className="editor-row">
          <div className="editor">
            <Editor
              height="90vh"
              path={(file || {}).name}
              defaultLanguage={(file || {}).language}
              defaultValue={(file || {}).value}
              onChange={handleEditorChange}
              theme="vs-dark"
              loading="Setting up your environment!"
            />
          </div>
        </Col>

        <Col md={4} className="editor-row">
          <div className="input">
            <p className="input-label">Standard Input</p>
            <textarea className="input-field" placeholder="stdin" onChange={e => setInput(e.target.value)}></textarea>
          </div>

          <div className="output">
            <p className="input-label">Standard Output</p>
            <pre className="output-field" style={{ 'color': responseCode == null ? 'red' : '#6aff00' }}>{output}</pre>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function LoaderButton() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress
      ?
      <Loader type="Oval" color="#fff" height={25} width={25} />
      :
      <>Run <PlayCircleOutlineIcon /></>
  )

}

export default IDE;