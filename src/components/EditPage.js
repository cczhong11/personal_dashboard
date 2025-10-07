import JsonEditPage from "./JsonEditPage";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { dest_url } from "./const";
export default function EditPage(props) {
  const [date, setDate] = useState(props.date);
  const [loading, setLoading] = useState(true);

  const [c] = useState(0);
  useEffect(() => {
    if (date !== "") {
      setLoading(false);
      return;
    }
    Axios.get(`${dest_url}/date?list=${props.list}`).then((data) => {
      setDate(data.data.date);
      setLoading(false);
    });
  }, [c]);
  return loading ? <></> : <JsonEditPage list={props.list} date={date} />;
}
