import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
export default function JsonRenderPage(props) {
  const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
  const [c] = useState(0);
  const [jsonStructure, setJsonStructure] = useState([]);
  const [jsonData, setJsonData] = useState({});
  const [markdownData, setMarkdownData] = useState("");
  useEffect(() => {
    Axios.get(`http://${dest_url}/json?name=${props.list}.json`).then((data) => {
      setJsonStructure(data.data.data[0].structure.content);
    });
  }, [c]);
  useEffect(() => {
    if (props.latest !== "true") {
      Axios.get(
        `http://${dest_url}/json?name=${props.name}&list=${props.list}`
      ).then((data) => {
        setJsonData(data.data.data[0].data);
      });
    }
    else {
        // here name is the list name
        Axios.get(
            `http://${dest_url}/json?date=latest&list=${props.list}`
          ).then((data) => {
            setJsonData(data.data.data[0].data);
          });
    }
  }, [jsonStructure]);
  useEffect(() => {
    const rs = jsonStructure.map(element => {
        if(props.onlynext){
            if (element.id.includes('next') ){
                return "## "+element.title+"\n\n"+ jsonData[element.id] ??"";
            }
        }
        else{
            var rs = jsonData[element.id] ??"";
            if(Array.isArray(jsonData[element.id])){
                rs = jsonData[element.id].join("\n");
            }
            return "## "+element.title+"\n\n"+ rs;
        }
        return "";
    });
    
    setMarkdownData(rs.join("\n"));
  },[jsonData]);
  return <ReactMarkdown source={markdownData} />;
}
