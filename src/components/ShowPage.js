import JsonRenderPage from './JsonRenderPage';
import Axios from "axios";
import {  Button } from 'antd';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function ShowPage(props) {
    const [markdownList, setMarkdownList] = useState([]);
    const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
    const [clickName, setClickName] = useState("");
    const [showAll,setShowAll] = useState(true);
    let history = useHistory();
    const c = 0;
    console.log(props.history);
    useEffect(() => {
        Axios.get(`http://${dest_url}/file?list=${props.list}`).then((data) => {
          setMarkdownList(
            data.data.data.filter((item) => {return !item.name.includes("9999")}).map((item) => {

              return {
                name: item.name,
              };
            })
          );
        });
        console.log(markdownList);
      }, [c,showAll]);
    return showAll?(<>{markdownList.sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
        .map((item,index) => {
          return (
              <>
            <a
              onClick={() => {
                setClickName(item.name);
                setShowAll(false);
              }}
              key={item.name}
            >
               {index}. {item.name}
            </a>
            <br/>
            </>
          );
        })}</>):(<><JsonRenderPage name={clickName} list={props.list} onlynext={false}/><Button type="primary"  onClick={()=>{setShowAll(true);}}>back</Button><Button type="primary"  onClick={()=>{history.push(`/${props.list}_edit?date=${clickName}`);}}>edit</Button></>);
}