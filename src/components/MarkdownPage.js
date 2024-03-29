import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { dest_url } from "./const";
export default function MarkdownPage(props) {
  const [c] = useState(0);
  const [markdownData, setMarkdownData] = useState("");
  let history = useHistory();
  useEffect(() => {
    Axios.get(
      `https://${dest_url}/file?name=${props.name}&list=${props.list}`
    ).then((data) => {
      setMarkdownData(data.data.data[0].content);
    });
  }, [c]);
  return (
    <>
      <ReactMarkdown source={markdownData} />

      <Button
        type="primary"
        onClick={() => {
          history.push(`/markdown_edit?list=${props.list}&name=${props.name}`);
        }}
      >
        edit
      </Button>
    </>
  );
}
