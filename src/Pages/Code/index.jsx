import React, { useState } from "react";
import styled from "styled-components";


import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const Container = styled.div`
    background: white;
    display: flex;
    height: 500px;
    width: 100%;
`;

const Menu = styled.div`
    border: 1px solid black;
    width: 100px;
`;

const Code = () => {

    const [code, setCode] = useState(``);

    return (
        <Container>
            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                tabSize={8}
                padding={30}
                className="container__editor"
            />
            <Menu></Menu>
        </Container>
    );
}

export default Code;
