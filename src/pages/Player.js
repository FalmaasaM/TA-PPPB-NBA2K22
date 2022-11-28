import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Player.css";
import CardPlayer from "../component/CardPlayer"

export default function DetailPlayer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-nba-2k22.herokuapp.com/items")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="player">Best Player of NBA 2K22</p>
      {data.slice(7,14).map((item, index) => (
        <Fragment key={item.id}>
          <CardPlayer
            img={item.foto}
            onClick={() => navigate(`DetailPlayer/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}