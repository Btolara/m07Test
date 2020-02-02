import React from "react";
import "./PortCard.css";

const CardDatas = [
  {
    title: "branding",
    subtitle: "brand identity",
    text: "Brand system develop into a lawyers brand in Colombia.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fd467377454093.5c88130c18355.jpg"
  },
  {
    title: "Travel",
    subtitle: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400"
  }
];

const Card = props => {
  return (
    <div className="cardContainer">
      <article className="card">
        <div
          className="card_header"
          style={{
            backgroundImage: `url(${props.image})`,
            JustifyContent: "flex-start",
            padding: "50px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <h5>{props.title}</h5>
        </div>
        <div className="cardBody">
          <h3>{props.subtitle}</h3>
          <h4>{props.text}</h4>
        </div>
      </article>
    </div>
  );
};

const PortCard = () => CardDatas.map(item => <Card {...item} />);

export default PortCard;
