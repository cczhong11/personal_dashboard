import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import {  Button } from 'antd';
const { TextArea } = Input;

export default function JsonEditPage(props) {
  const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
  const [jsonStructure, setJsonStructure] = useState([]);
  const [c] = useState(0);
  const [jsonData, setJsonData] = useState({});
  const [date, setDate] = useState(props.date);
  // get json structure
  useEffect(() => {
    Axios.get(`http://${dest_url}/json?name=${props.name}.json`).then(
      (data) => {
        setJsonStructure(data.data.data[0].structure.content);
      }
    );
  }, [c]);
  const setTextInput = (text, key) => {
    setJsonData({
      ...jsonData,
      [key]: text,
    });
  };
  const setInputDate = (text) => {
    setDate(text);
  };
  const postData = ()=>{
    const postData = {date:date, data:jsonData};
    Axios.post(`http://${dest_url}/json?list=${props.name}`,postData);
  }
  return (
    <>
      <h2>Date</h2>
      <Input value={date} onChange={(e) => setInputDate(e.target.value)} />
      {jsonStructure.map((data) => {
        return (
          <div className="row">
            <h2>{data.title}</h2>
            
            <TextArea
              rows={4}
              onChange={(e) => setTextInput(e.target.value, data.id)}
            />
            <br />
          </div>
        );
      })}
      <Button type="primary"  onClick={()=>{postData();}}>submit</Button>
    </>
  );
}
