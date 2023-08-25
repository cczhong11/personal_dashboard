import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { dest_url } from "./const";
import "./BookSummaryPage.css";
export default function BookSummaryPage(props) {
  const [c] = useState(0);

  const [jsonData, setJsonData] = useState([]);
  const [selectedSummaryIndex, setSelectedSummaryIndex] = useState(null);
  useEffect(() => {
    Axios.get(
      `https://${dest_url}/json?name=${props.name}&list=${props.list}`
    ).then((data) => {
      console.log(data);
      setJsonData(data.data.data[0].data);
    });
  }, [c]);
  const toggleOriginalText = (index) => {
    if (selectedSummaryIndex === index) {
      setSelectedSummaryIndex(null); // 如果原文已经展示，就隐藏
    } else {
      setSelectedSummaryIndex(index); // 否则就展示
    }
  };
  return (
    <div>
      {jsonData?.map((book, index) => (
        <div
          className={`book-item ${
            selectedSummaryIndex === index ? "show-original" : ""
          }`}
          key={index}
        >
          <p className="summary">{book.summary}</p>
          <button onClick={() => toggleOriginalText(index)}>阅读原文</button>
          {selectedSummaryIndex === index && (
            <p className="original-text">{book.chunk}</p>
          )}
        </div>
      ))}
    </div>
  );
}
