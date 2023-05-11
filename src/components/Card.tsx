import React from "react";

type Props = {
  cardContent: string;
  cardTitle: string;
  cardImg: string;
};

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.cardImg} alt="" />
        <div className="card-text">
        <p>{props.cardContent}</p>
        <h3>{props.cardTitle}</h3>
      </div>
      </div>
    </div>
  );
};

export default Card;
