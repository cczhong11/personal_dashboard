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
    <div ref={divRef} className="book-summary-page">
      <div
        className="selection-toolbar"
        style={{
          top: `${toolbarPosition.top}px`,
          left: `${toolbarPosition.left}px`,
        }}
      >
        <button className="btn btn-primary" onClick={handleHighlight}>
          高亮
        </button>
      </div>
      <h2 className="page-title">
        ✨ Latest Highlight: {sorted_highlight[0]?.toString() ?? "—"}
      </h2>

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
          <button
            className="btn btn-secondary"
            onClick={() => toggleOriginalText(index)}
          >
            阅读原文
          </button>
          <button
            className="btn btn-important"
            onClick={handleImportant}
            data-index={index}
          >
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
        :root {
          --card-radius: 12px;
          --border-soft: #e9ecef;
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06),
            0 1px 2px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.04),
            0 4px 6px rgba(0, 0, 0, 0.06);
          --accent: #ffeb3b;
          --accent-strong: #f5c518;
        }

        .book-summary-page {
          max-width: 860px;
          margin: 0 auto;
          padding: 24px 16px 48px;
        }

        .page-title {
          position: sticky;
          top: 0;
          z-index: 5;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: saturate(160%) blur(6px);
          padding: 12px 8px;
          margin: 0 0 12px 0;
          border-bottom: 1px solid var(--border-soft);
        }

        .book-item {
          background: #fff;
          border: 1px solid var(--border-soft);
          border-radius: var(--card-radius);
          padding: 14px 16px;
          margin: 14px 0;
          box-shadow: var(--shadow-sm);
          transition: transform 0.12s ease, box-shadow 0.2s ease,
            border-color 0.2s ease;
        }
        .book-item:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        .book-item.important {
          border-color: var(--accent-strong);
          box-shadow: inset 0 0 0 2px rgba(245, 197, 24, 0.25);
        }

        .summary {
          font-weight: 500;
          line-height: 1.7;
          margin: 0 0 10px 0;
        }
        .original-text {
          margin-top: 10px;
          padding: 12px;
          background: #fafafa;
          border-radius: 10px;
          border: 1px dashed #e5e7eb;
          line-height: 1.7;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          line-height: 1;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.2s ease, border-color 0.2s ease,
            transform 0.05s ease;
          margin-right: 8px;
        }
        .btn:active {
          transform: translateY(1px);
        }
        .btn-primary {
          background: rgba(255, 213, 79, 0.85); /* 柔和暖黄，稍微透明 */
          border-color: rgba(251, 192, 45, 0.85);
          color: #111;
          backdrop-filter: saturate(180%) blur(8px); /* 毛玻璃效果 */
          -webkit-backdrop-filter: saturate(180%) blur(8px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
        }
        .btn-primary:hover {
          background: rgba(255, 202, 40, 0.9);
        }
        .btn-secondary {
          background: #f1f3f5;
          border-color: #e5e7eb;
        }
        .btn-important {
          background: #fff7e6;
          border-color: #ffd666;
        }

        .selection-toolbar {
          position: absolute;
          transform: translate(-50%, -100%);
          background: #111;
          color: #fff;
          padding: 6px 8px;
          border-radius: 10px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
          display: flex;
          gap: 8px;
          z-index: 999;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .selection-toolbar::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #111;
        }

        .highlight {
          background-color: #fff59d;
          padding: 0 0.1em;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
