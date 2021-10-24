import { React, useState, useRef } from 'react'
import './IDE.css';

import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import qodeide from "../IDE/qodeide.png"

// import MonacoEditor from 'react-monaco-editor';

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function IDE() {

  const [language, setLanguage] = useState({})
  const [code, setCode] = useState(`#include<iostream>\nusing namespace std;\n\nint main()\n{\n//your code goes here\nreturn 0;\n}`)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [responseCode, setResponseCode] = useState("")


  function handleEditorChange(value, event) {
    setCode(value);
  }

  async function handleSubmit(e) {
    console.log(JSON.stringify(code));

    console.log(JSON.stringify(input))

    try {
      const response = await fetch('http://localhost:5000/qode-compiler', {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          script: code,
          stdin: input,
          language: "cpp",
          versionIndex: "3"
        })
      })

      // console.log(await response.json())

      const result = await response.json()

      console.log(result)

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

          <Form.Select className="lang-selector" aria-label="Language Selector">
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="java">JAVA</option>
            <option value="py">PYTHON</option>
          </Form.Select>

          <Button className="run-btn running" variant="success" size="lg" onClick={e => handleSubmit()}>Run <PlayCircleOutlineIcon /></Button>

        </div>
      </div>
      <Row>
        <Col md={8} className="editor-row">
          <div className="editor">
            <Editor
              height="90vh"
              defaultLanguage="cpp"
              defaultValue={code}
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
            <pre className="output-field" style={{'color' : responseCode == null ? 'red' : '#6aff00'}}>{output}</pre>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default IDE;