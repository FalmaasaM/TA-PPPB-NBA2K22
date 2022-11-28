import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Team.css";
import CardTeam from "../component/CardTeam"

export default function DetailTeam() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-nba-2k22.herokuapp.com/items")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="team">Best Team of NBA 2K22</p>
      {data.slice(0,7).map((item, index) => (
        <Fragment key={item.id}>
          <CardTeam
            img={item.logo}
            onClick={() => navigate(`DetailTeam/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}