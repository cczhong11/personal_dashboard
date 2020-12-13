import MarkdownPage from './MarkdownPage';
import Axios from "axios";
import {  Button } from 'antd';
import React, { useState, useEffect } from "react";
export default function ReadList() {
    const [markdownList, setMarkdownList] = useState([]);
    const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
    const [clickName, setClickName] = useState("");
    const [showAll,setShowAll] = useState(true);
    const c = 0;
    useEffect(() => {
        Axios.get(`http://${dest_url}/file?list=read`).then((data) => {
          setMarkdownList(
            data.data.data.map((item) => {
              return {
                name: item.name,
              };
            })
          );
        });
        console.log(markdownList);
      }, [c,showAll]);
    return showAll?(<>{markdownList.sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
        .map((item) => {
          return (
              <>
            <a
              onClick={() => {
                setClickName(item.name);
                setShowAll(false);
              }}
              key={item.name}
            >
              {item.name}
            </a>
            <br/>
            </>
          );
        })}</>):(<><MarkdownPage name={clickName} list="read"/><Button type="primary"  onClick={()=>{setShowAll(true);}}>back</Button></>);
}