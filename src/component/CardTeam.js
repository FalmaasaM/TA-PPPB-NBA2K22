import "./CardTeam.css";

export default function CardTeam({ nama, img, onClick }) {
  return (
    <div className="cardteam" onClick={onClick}>
      <img src={img} alt="" className="phototeam" />
      <div className="descriptionteam">
        <div>
          <p id="nama">{nama}</p>        
        </div>
      </div>
    </div>
  );
}