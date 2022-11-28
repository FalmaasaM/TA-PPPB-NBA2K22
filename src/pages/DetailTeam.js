import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import CardBigTeam from "../component/CardBigTeam";

export default function DetailTeam() {
  const { state } = useLocation();
  return (
    <>
    <p id="team"></p>
      <div className="containerTop">
        
          <Fragment key={state.id}>
            <CardBigTeam
              img={state.logo}
              nama={state.nama}
              pelatih={state.pelatih}
              stadion={state.stadion}
              markas={state.markas}
              deskripsi={state.deskripsi}
            />           
              <div style={{ marginRight: 40 }} />           
          </Fragment>      
      </div>
      </>
  );
}