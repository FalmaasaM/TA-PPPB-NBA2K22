import "./CardBigTeam.css";

export default function CardBigTeam(props) {
  return (
    <div className="containerBigTeam">
      <img src={props.img} alt="" className="posterBigTeam" />
      <div className="descriptionBigTeam">
        <div>
          <p id="nama">{props.nama}</p>
          <p id="pelatih">Pelatih : {props.pelatih}</p>
          <p id="stadion">Stadion : {props.stadion}</p>
          <p id="markas">Markas : {props.markas}</p>
          <p id="deskripsi">{props.deskripsi}</p>
        </div>      
      </div>
    </div>
  );
}