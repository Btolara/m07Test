import React from "react";

const InfoCard = props => {
  return (
    <div className="infocard">
      <img src={props.infor.imgsrc} alt="" className="myPhoto" />
      <h1>{props.infor.name}</h1>
      <h4>{props.infor.proffesion}</h4>
      <h4>{props.infor.email}</h4>
    </div>
  );
};

export default InfoCard;
