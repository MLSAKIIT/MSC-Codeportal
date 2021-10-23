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


  function handleEditorChange(value, event) {
    setCode(value);
  }

  function handleSubmit(e)
  {
    console.log(JSON.stringify(code));

    console.log(JSON.stringify(input))

    setOutput(input)

    console.log(JSON.stringify(output))
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

          <Button className="run-btn running" variant="success" size="lg" onClick={e => handleSubmit()}>Run <PlayCircleOutlineIcon/></Button>

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
            <label className="output-field">{output}</label>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default IDE;


// import {Controlled as CodeMirror} from 'react-codemirror2';


// require('codemirror/lib/codemirror.css');
// require('codemirror/theme/material.css');
// require('codemirror/theme/neat.css');
// require('codemirror/mode/xml/xml.js');
// require('codemirror/mode/javascript/javascript.js');


  // function handleEditorDidMount(editor, monaco) {
  //   console.log("onMount: the editor instance:", editor);
  //   console.log("onMount: the monaco instance:", monaco);
  //   editorRef.current = editor; 
  // }

  // function handleEditorWillMount(monaco) {
  //   console.log("beforeMount: the monaco instance:", monaco);
  // }

  // function handleEditorValidation(markers) {
  //   // model markers
  //   // markers.forEach(marker => console.log('onValidate:', marker.message));
  // }

  // function showValue() {
  //   alert(editorRef.current.getValue());
  // }



                  // onMount={handleEditorDidMount}
                // beforeMount={handleEditorWillMount}
                // onValidate={handleEditorValidation}