import CardAbout from "../component/CardAbout";
import "./About.css";

export default function About() {

  const data = [
    {
      name: "NBA 2K22",
      pict: "https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA-768x480.png",
      instagram: "_falmaas_",
      github: "FalmaasaM"
    },
    
  ];

  return (
    <div className="container">
      <h1>About Apps</h1>
      {data.map(about => <CardAbout about={about} />)}
    </div>
  );
}