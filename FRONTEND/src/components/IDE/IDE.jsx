import { React, useState, useRef } from 'react'
import './IDE.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

// import MonacoEditor from 'react-monaco-editor';

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";



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

      <Row>
        <Col md={8} className="editor-row">
          <div className="editor">
            <Editor
              height="100vh"
              defaultLanguage="cpp"
              defaultValue={`\n#include<iostream>\nusing namespace std;\n\nint main()\n{\n//your code goes here\nreturn 0;\n}`}
              onChange={handleEditorChange}
              theme="vs-dark"
              loading="Setting up your environment!"
            />

          </div>
        </Col>


        <Col md={4} className="editor-row">
          <div className="input">
            <p className="input-label">Standard Input stdin</p>
            <textarea className="input-field" name="w3review" placeholder="Input" onChange={e => setInput(e.target.value)}></textarea>
          </div>

          <div className="output">
            <p className="input-label">Standard Output stdout</p>
            <textarea className="output-field" name="w3review" placeholder="Output"></textarea>
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