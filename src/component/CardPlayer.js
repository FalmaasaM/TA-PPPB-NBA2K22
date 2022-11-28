import "./CardPlayer.css";

export default function CardPlayer({ img, onClick }) {
  return (
    <div className="cardplayer" onClick={onClick}>
      <img src={img} alt="" className="photoplayer" />
      <div className="descriptionplayer">
      </div>
    </div>
  );
}