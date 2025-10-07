import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { dest_url } from "./const";
const { TextArea } = Input;
export default function MarkdownEditPage(props) {
  const [c] = useState(0);
  const [jsonData, setJsonData] = useState({});
  const [line, setLine] = useState(10);
  let history = useHistory();

  //load data if exist
  useEffect(() => {
    if (props.name !== undefined && props.name !== null && props.name !== "") {
      let url = `${dest_url}/file?list=${props.list}&name=${props.name}`;

      Axios.get(url).then((data) => {
        setJsonData(data.data.data[0]);

        setLine(data.data.data[0].content.split("\n").length + 10);
      });
    }
  }, [c]);
  const setTextInput = (text) => {
    console.log(jsonData);
    setJsonData({
      ...jsonData,
      content: text,
    });
  };

  const postData = () => {
    Axios.post(
      `${dest_url}/file?list=${props.list}&name=${props.name}`,
      jsonData
    ).then(() => {
      history.push(`/markdown_show?list=${props.list}&name=${props.name}`);
    });
  };
  return (
    <>
      {
        <TextArea
          rows={line}
          onChange={(e) => setTextInput(e.target.value)}
          value={jsonData.content ?? ""}
        />
      }
      <Button
        type="primary"
        onClick={() => {
          postData();
        }}
      >
        submit
      </Button>
    </>
  );
}
