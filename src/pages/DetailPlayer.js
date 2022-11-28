import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import CardBigPlayer from "../component/CardBigPlayer";

export default function DetailPlayer() {
  const { state } = useLocation();
  return (
    <>
    <p id="player"></p>
      <div className="containerTop">
        
          <Fragment key={state.id}>
            <CardBigPlayer
              img={state.foto}
              nama={state.nama}
              name={state.name}
              team={state.team}
              posisi={state.posisi}
            />           
              <div style={{ marginRight: 40 }} />           
          </Fragment>      
      </div>
      </>
  );
}