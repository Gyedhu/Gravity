import React from "react";
import { CodeEditor } from "../../components";

const Code = ({goto}) => {
  return (
    <CodeEditor goto={goto} />
  );
}

export default Code;
