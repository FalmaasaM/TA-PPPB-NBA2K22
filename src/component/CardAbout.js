import "./CardAbout.css";

const CardAbout = props => {
  const about = props.about;
  return (
    <div className="card-container">
      <div className="card-top-container">
        <img className="about-picture" src={about.pict} alt="" />
        <div className="about-id">
          <p className="name">{about.name}</p>
          <p>{about.university}</p>
          <p>{about.locations}</p>
        </div>
      </div>
      <div className="divider" />
      <div className="card-bottom-container">
        <a href={"https://instagram.com/" + about.instagram}>
          <div className="social-network" style={{backgroundColor: '#fff'}}>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" />
            <p>Instagram</p>
          </div>
        </a>
        <a href={"https://github.com/" + about.github}>
          <div className="social-network" style={{backgroundColor: '#1a1a1c', color: '#fff'}}>
            <img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="" />
            <p>Github</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardAbout;