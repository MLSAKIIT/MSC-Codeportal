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

  const [code, setCode] = useState("")
  const [input, setInput] = useState("")


  function handleEditorChange(value, event) {
    setCode(value);

    console.log(JSON.stringify(code));
  }

  console.log(input)

  return (

    <div className="ide">

      <div className="ide-toolbar">
        <img className="qodeide-logo" src={qodeide} />

        <div className="selection-console">
          <Button className="run-btn" variant="outline-primary" href="/" size="lg">Back Home</Button>

          <Form.Select className="lang-selector" aria-label="Default select example">
            <option>C++</option>
            <option value="1">C</option>
            <option value="2">JAVA</option>
            <option value="3">PYTHON</option>
          </Form.Select>

          <Button className="run-btn" variant="outline-primary" size="lg">Run <PlayCircleOutlineIcon/></Button>

        </div>
      </div>
      <Row>
        <Col md={8} className="editor-row">
          <div className="editor">
            <Editor
              height="90vh"
              defaultLanguage="cpp"
              defaultValue={`#include<iostream>\nusing namespace std;\n\nint main()\n{\n//your code goes here\nreturn 0;\n}`}
              onChange={handleEditorChange}
              theme="vs-dark"
              loading="Setting up your environment!"
            />
          </div>
        </Col>

        <Col md={4} className="editor-row">
          <div className="input">
            <p className="input-label">Standard Input</p>
            <textarea className="input-field" name="w3review" placeholder="stdin" onChange={e => setInput(e.target.value)}></textarea>
          </div>

          <div className="output">
            <p className="input-label">Standard Output</p>
            <textarea className="output-field" name="w3review" disabled></textarea>
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