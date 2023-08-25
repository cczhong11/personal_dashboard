import MarkdownPage from "./MarkdownPage";
import Axios from "axios";
import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { dest_url } from "./const";
import BookSummaryPage from "./BookSummaryPage";
export default function ReadSummaryList() {
  const [markdownList, setMarkdownList] = useState([]);

  const [clickName, setClickName] = useState("");
  const [showAll, setShowAll] = useState(true);
  const c = 0;
  useEffect(() => {
    Axios.get(`https://${dest_url}/file?list=book_summary`).then((data) => {
      setMarkdownList(
        data.data.data.map((item) => {
          return {
            name: item.name,
          };
        })
      );
    });
  }, [c, showAll]);
  return showAll ? (
    <>
      {markdownList
        .sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
        .map((item, index) => {
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
              <br />
            </>
          );
        })}
    </>
  ) : (
    <>
      <BookSummaryPage name={clickName} list="book_summary" />
      <Button
        type="primary"
        onClick={() => {
          setShowAll(true);
        }}
      >
        back
      </Button>
    </>
  );
}
