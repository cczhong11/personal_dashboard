import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { dest_url } from "./const";
export default function BookSummaryPage() {
  const [c] = useState(0);

  const [jsonData, setJsonData] = useState({});
  const [selectedSummaryIndex, setSelectedSummaryIndex] = useState(null);
  useEffect(() => {
    Axios.get(
      `https://${dest_url}/json?name=${props.name}&list=${props.list}`
    ).then((data) => {
      setJsonData(data.data.data[0].data);
    });
  }, [c]);

  return (
    <div>
      {jsonData.map((book, index) => (
        <div key={index}>
          <p>{book.summary}</p>
          <button onClick={() => setSelectedSummaryIndex(index)}>
            阅读原文
          </button>
          {selectedSummaryIndex === index && <p>{book.originalText}</p>}
        </div>
      ))}
    </div>
  );
}
