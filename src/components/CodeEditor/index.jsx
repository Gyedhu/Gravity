import React from "react";
import { Container, IDE, Navbar, FileHeader, Menu } from "./style";

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { connect } from "react-redux";
import { database } from "firebase";

const mapStateToProps = state => ({
    name: state.user.name,
    uid: state.user.uid,
    files: state.code.files,
    currentCode: state.code.currentCode
});

const mapDispatchToProps = dispatch => ({
    setCode: code => dispatch({ type: "SET_CODE", payload: code }),
    setCurrentCode: index => dispatch({ type: "SET_CURRENT_CODE", payload: index }),
    createNewFile: () => dispatch({ type: "CREATE_NEW_FILE" })
});

const CodeEditor = ({ goto, files, name, setCode, uid, currentCode, setCurrentCode, createNewFile }) => {

    const upload = () => {

        let fileName = currentCode.id;
        let dotIndex = fileName.lastIndexOf(".");
        let file = fileName.slice(0, dotIndex);
        let ext = fileName.slice(dotIndex + 1, fileName.length);
        alert(file);
        const codeRef = database().ref(`${name}/codes/${file}`).set({
            code: currentCode.code,
            time: new Date(),
            type: ext
        });
        alert(codeRef);
    }

    return (
        <Container>
            <Navbar>
                {
                    files.map((file, index) =>
                        <FileHeader key={file + index} onClick={() => setCurrentCode(file)} active={currentCode.id === file}>
                            <div>{file}</div>
                            <span title="Create new file" className="material-icons">cancel</span>
                        </FileHeader>
                    )
                }
            </Navbar>

            <IDE>
                <Editor
                    value={currentCode.code}
                    onValueChange={code => setCode(code)}
                    highlight={code => highlight(code, languages.js)}
                    tabSize={8}
                    padding={30}
                    style={{ fontSize: "1.2em" }}
                    className="container__editor"
                    disabled={files.length <= 0}
                />
            </IDE>
            <Menu>
                <span onClick={createNewFile} title="Create new file" className="material-icons">add</span>
                <span onClick={upload} title="Upload this file" className="material-icons">backup</span>
                <span title="Share this file with a friend" className="material-icons">share </span>
                <span onClick={() => goto("profile")} title="Go back" className="material-icons">exit_to_app</span>
            </Menu>
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
