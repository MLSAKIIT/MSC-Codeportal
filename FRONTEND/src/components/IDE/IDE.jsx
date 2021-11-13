import { React, useState } from 'react'
import './IDE.css';
import langScripts from '../IDE/langScripts'
import qodeide from "../IDE/qodeide.png"

import { Row, Col, Button, Form, Dropdown } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
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
          <Button className="run-btn" variant="outline-primary" href="/"  >Back Home</Button>

          <Dropdown className="lang-selector">
            <Dropdown.Toggle className="lang-selector-btn">
              {(file || {}).name}
            </Dropdown.Toggle>

            <Dropdown.Menu className="lang-selector-menu" variant="dark">
              <Dropdown.Item onClick={() => setFileName("cplusplus.cpp")}><img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" height="22px" width="20px" style={{'margin' : '0 1rem'}}/>C++</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("c.c")}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" height="22px" width="20px" style={{'margin' : '0 1rem'}}/>C</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("java.java")}><img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" height="20px" width="20px" style={{'margin' : '0 1rem'}}/>JAVA</Dropdown.Item>
              <Dropdown.Item onClick={() => setFileName("python.py")}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" height="20px" width="20px" style={{'margin' : '0 1rem'}}/>PYTHON</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className="run-btn running" variant="success"  onClick={e => handleSubmit()}><LoaderButton />  </Button>
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
      <Loader type="Oval" color="#fff" height={20} width={20} />
      :
      <>Run <PlayCircleFilledWhiteOutlinedIcon className="play-btn"/></>
  )

}

export default IDE;