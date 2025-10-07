import JsonRenderPage from "./JsonRenderPage";
import Axios from "axios";
import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MapContainer from "./GoogleMap";
import { dest_url } from "./const";
export default function ShowPage(props) {
  const [markdownList, setMarkdownList] = useState([]);

  const [clickName, setClickName] = useState("");
  const [showAll, setShowAll] = useState(true);
  let history = useHistory();
  const c = 0;
  useEffect(() => {
    Axios.get(`${dest_url}/file?list=${props.list}`).then((data) => {
      if (props.list.includes("tour") || props.list.includes("resturant")) {
        setMarkdownList(
          data.data.data
            .filter((item) => {
              return !item.name.includes("9999");
            })
            .map((item) => {
              return {
                name: item.name,
                latlng: item.latlng,
              };
            })
        );
      } else {
        setMarkdownList(
          data.data.data
            .filter((item) => {
              return !item.name.includes("9999");
            })
            .map((item) => {
              return {
                name: item.name,
              };
            })
        );
      }
    });
  }, [c, showAll]);
  return showAll ? (
    <>
      {markdownList
        .sort((a, b) => {
          return b.name.localeCompare(a.name);
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
      {props.list.includes("tour") || props.list.includes("resturant") ? (
        <MapContainer list={markdownList} />
      ) : (
        <></>
      )}
    </>
  ) : (
    <>
      <JsonRenderPage name={clickName} list={props.list} onlynext={false} />
      <Button
        type="primary"
        onClick={() => {
          setShowAll(true);
        }}
      >
        back
      </Button>
      <Button
        type="primary"
        onClick={() => {
          history.push(`/${props.list}_edit?date=${clickName}`);
        }}
      >
        edit
      </Button>
      <br />
    </>
  );
}
