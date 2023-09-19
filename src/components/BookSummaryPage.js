import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { dest_url } from "./const";
import "./BookSummaryPage.css";
export default function BookSummaryPage(props) {
  const [c] = useState(0);

  const [jsonData, setJsonData] = useState([]);
  const [highlightJsonData, setHighlightJsonData] = useState([]);
  const [selectedSummaryIndex, setSelectedSummaryIndex] = useState(null);
  useEffect(() => {
    Axios.get(
      `https://${dest_url}/json?name=${props.name}&list=${props.list}`
    ).then((data) => {
      setJsonData(data.data.data[0].data);
    });
  }, [c]);
  useEffect(() => {
    Axios.get(
      `https://${dest_url}/json?name=${props.name}&list=${props.list}_highlight`
    ).then((data) => {
      setHighlightJsonData(data.data.data[0].data.data);
    });
  }, [c]);
  console.log(highlightJsonData);
  const toggleOriginalText = (index) => {
    if (selectedSummaryIndex === index) {
      setSelectedSummaryIndex(null); // 如果原文已经展示，就隐藏
    } else {
      setSelectedSummaryIndex(index); // 否则就展示
    }
  };
  const divRef = useRef(null);

  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const postData = () => {
    Axios.post(`https://${dest_url}/json?list=${props.list}_highlight`, {
      date: props.name.split(".")[0], // remove json
      data: highlightJsonData,
    }).then(() => {});
  };
  const handleHighlight = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const parentElement = range.commonAncestorContainer.parentElement;
    const parentparentElement = parentElement.parentElement;
    const currentIndex = parentparentElement.getAttribute("data-index");
    const currentType = parentparentElement.getAttribute("class");
    const newHighlight = {
      index: parseInt(currentIndex, 10),
      startOffset: range.startOffset,
      endOffset: range.endOffset,
      type: currentType,
    };
    const span = document.createElement("span");
    span.className = "highlight";
    range.surroundContents(span);
    selection.removeAllRanges();
    setHighlightJsonData([...highlightJsonData, newHighlight]);
  };
  useEffect(() => {
    postData();
  }, [highlightJsonData]);

  const showToolbar = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top - 40,
        left: rect.left + rect.width / 2,
      });
    }
  };

  useEffect(() => {
    divRef.current.addEventListener("mouseup", showToolbar);
    divRef.current.addEventListener("touchend", showToolbar);

    return () => {
      divRef.current.removeEventListener("mouseup", showToolbar);
      divRef.current.removeEventListener("touchend", showToolbar);
    };
  }, []);
  const renderHighlightedText = (text, summaryIndex, contentType) => {
    let lastOffset = 0;
    const elements = [];

    // 找到这个摘要或原文的所有高亮数据
    const highlights = highlightJsonData.filter(
      (highlight) =>
        highlight.index === summaryIndex && highlight.type === contentType
    );

    highlights.forEach((highlight) => {
      // 添加没有高亮的文本
      elements.push(
        <span>{text.slice(lastOffset, highlight.startOffset)}</span>
      );
      // 添加高亮的文本
      elements.push(
        <span className="highlight">
          {text.slice(highlight.startOffset, highlight.endOffset)}
        </span>
      );
      lastOffset = highlight.endOffset;
    });

    // 添加剩下的没有高亮的文本
    elements.push(<span>{text.slice(lastOffset)}</span>);

    return elements;
  };
  return (
    <div ref={divRef}>
      <div
        style={{
          position: "absolute",
          top: `${toolbarPosition.top}px`,
          left: `${toolbarPosition.left}px`,
        }}
      >
        <button onClick={handleHighlight}>高亮</button>
      </div>
      {jsonData?.map((book, index) => (
        <div
          className={`book-item ${
            selectedSummaryIndex === index ? "show-original" : ""
          }`}
          key={index}
        >
          <p className="summary" data-index={index}>
            {index + 1}. {renderHighlightedText(book.summary, index, "summary")}
          </p>
          <button onClick={() => toggleOriginalText(index)}>阅读原文</button>
          {selectedSummaryIndex === index && (
            <p className="original-text" data-index={index}>
              {renderHighlightedText(book.chunk, index, "original-text")}
            </p>
          )}
        </div>
      ))}

      <style jsx>{`
        .highlight {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
}
