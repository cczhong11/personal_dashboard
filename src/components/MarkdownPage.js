import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
export default function MarkdownPage(props) {
    const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
    const [c] = useState(0);
    const [markdownData, setMarkdownData] = useState("");
    useEffect(() => {
      Axios.get(`http://${dest_url}/file?name=${props.name}&list=${props.list}`).then((data) => {
        setMarkdownData(data.data.data[0].content);
      });
    }, [c]);
    return <ReactMarkdown source={markdownData} />;
}