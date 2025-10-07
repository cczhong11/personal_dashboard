import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { dest_url } from "./const";
export default function JsonRenderPage(props) {
  const [c] = useState(0);
  const [jsonStructure, setJsonStructure] = useState([]);
  const [jsonData, setJsonData] = useState({});
  const [markdownData, setMarkdownData] = useState("");
  useEffect(() => {
    Axios.get(`${dest_url}/json?name=${props.list}.json`).then(
      (data) => {
        setJsonStructure(data.data.data[0].structure.content);
      }
    );
  }, [c]);
  useEffect(() => {
    if (props.latest !== "true") {
      Axios.get(
        `${dest_url}/json?name=${props.name}&list=${props.list}`
      ).then((data) => {
        setJsonData(data.data.data[0].data);
      });
    } else {
      // here name is the list name
      Axios.get(`${dest_url}/json?date=latest&list=${props.list}`).then(
        (data) => {
          setJsonData(data.data.data[0].data);
        }
      );
    }
  }, [jsonStructure]);
  useEffect(() => {
    var rs = jsonStructure.map((element) => {
      if (props.onlynext) {
        if (element.id.includes("next")) {
          return "## " + element.title + "\n\n" + jsonData[element.id] ?? "";
        }
      } else {
        var rs = jsonData[element.id] ?? "";
        if (Array.isArray(jsonData[element.id])) {
          rs = jsonData[element.id].join("\n");
        }
        return "## " + element.title + "\n\n" + rs;
      }
      return "";
    });
    rs.unshift(`# ${jsonData["date"]}`);
    setMarkdownData(rs.join("\n"));
  }, [jsonData]);
  return <ReactMarkdown source={markdownData} />;
}
