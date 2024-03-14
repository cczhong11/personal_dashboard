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
      setHighlightJsonData(data.data.data[0].data.data ?? []);
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
  const importantHighlights = highlightJsonData.filter(
    (highlight) => highlight.type === "important"
  );
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const postData = () => {
    Axios.post(`https://${dest_url}/json?list=${props.list}_highlight`, {
      date: props.name.split(".")[0], // remove json
      data: highlightJsonData,
    }).then(() => {});
  };
  const computeTrueOffsets = (range, currentIndex, currentType) => {
    // get selected text
    let text = range.toString();
    let current_text =
      currentType === "summary"
        ? jsonData[currentIndex].summary
        : jsonData[currentIndex].chunk;
    let startOffset = current_text.indexOf(text);
    let endOffset = startOffset + text.length;
    return { startOffset, endOffset };
  };
  const handleHighlight = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const parentElement = range.commonAncestorContainer.parentElement;
    const parentparentElement = parentElement.parentElement;
    const currentIndex = parentparentElement.getAttribute("data-index");
    const currentType = parentparentElement.getAttribute("class");
    const rs = computeTrueOffsets(
      range,
      parseInt(currentIndex, 10),
      currentType
    );
    const newHighlight = {
      index: parseInt(currentIndex, 10),
      startOffset: rs.startOffset,
      endOffset: rs.endOffset,
      type: currentType,
    };
    const span = document.createElement("span");
    span.className = "highlight";
    range.surroundContents(span);
    selection.removeAllRanges();
    setHighlightJsonData([...highlightJsonData, newHighlight]);
  };
  const handleImportant = (e) => {
    const parentElement = e.target.parentElement;
    const currentIndex = e.target.getAttribute("data-index");
    const newHighlight = {
      index: parseInt(currentIndex, 10),
      startOffset: 0,
      endOffset: 0,
      type: "important",
    };
    if (!parentElement.textContent.startsWith("⭐")) {
      parentElement.textContent = "⭐" + parentElement.textContent;
    }
    setHighlightJsonData([...highlightJsonData, newHighlight]);
  };
  useEffect(() => {
    if ((highlightJsonData ?? []).length === 0) {
      return;
    }
    postData();
  }, [highlightJsonData]);

  const showToolbar = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      setToolbarPosition({
        top: rect.top - 40 + scrollY,
        left: rect.left + rect.width / 2 + scrollX,
      });
    }
  };

  useEffect(() => {
    const event = "mouseup";

    divRef.current.addEventListener(event, showToolbar);

    return () => {
      divRef.current.removeEventListener(event, showToolbar);
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
  const sorted_highlight = importantHighlights
    .map((h) => {
      return h.index;
    })
    .sort((a, b) => b - a);
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
      <h2>Latest Highlight section: {sorted_highlight[0]?.toString()}</h2>

      {jsonData?.map((book, index) => (
        <div
          className={`book-item ${
            selectedSummaryIndex === index
              ? "show-original"
              : importantHighlights.some(
                  (highlight) => highlight.index === index
                )
              ? "important"
              : ""
          }`}
          key={index}
          data-index={index}
        >
          {importantHighlights.some((highlight) => highlight.index === index)
            ? "⭐"
            : ""}
          <p className="summary" data-index={index}>
            {index + 1}. {renderHighlightedText(book.summary, index, "summary")}
          </p>
          <button onClick={() => toggleOriginalText(index)}>阅读原文</button>

          <button onClick={handleImportant} data-index={index}>
            重要
          </button>
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
