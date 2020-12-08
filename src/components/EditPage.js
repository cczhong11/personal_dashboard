import JsonEditPage from './JsonEditPage';
import Axios from "axios";
import React, { useState, useEffect } from "react";
export default function EditPage(props) {
    const [date, setDate] = useState(props.date);
    const [loading, setLoading] = useState(true);
    const dest_url =
    (process.env.REACT_APP_IP ?? "127.0.0.1") +
    ":" +
    (process.env.REACT_APP_PORT ?? "219");
  const [c] = useState(0);
    useEffect(() => {
        if(date !== ""){
            setLoading(false);
            return;
        }
        Axios.get(`http://${dest_url}/date?list=${props.list}`).then((data) => {
            setDate(
            data.data.date);
            setLoading(false);
        });
        
      }, [c]);
    return loading?<></>:<JsonEditPage list={props.list} date={date}/>;
}