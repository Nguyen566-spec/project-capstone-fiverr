import React from "react";
import Card from "./Card";
import { CardList, CardProps } from "../constant/card_constant";

const PopularServices = () => {
  const renderCardList = () => {
    return CardList.map((item: CardProps, index: number) => {
      return (
        <div className="card-item" key={index}>
          <Card
            cardContent={item.cardContent}
            cardTitle={item.cardTitle}
            cardImg={item.cardImg}
          />
        </div>
      );
    });
  };
  return (
    <div className="popular-service">
      <div className="popular-content">
        <h2>Popular services</h2>
        <div className="slide-package">
          <button className="btn-slide left"><i className="fa-solid fa-chevron-left"></i></button>
          <div className="card-list">
            {renderCardList()}
          </div>
          <button className="btn-slide right"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
