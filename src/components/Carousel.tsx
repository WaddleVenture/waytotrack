import React, { useState } from "react";
import Card from "./Card";
import "./Carousel.scss";

type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  onClickCard?: () => void;
  action?: boolean;
};

type CarouselProps = {
  cards: CardProps[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const CARDS_PER_PAGE = 7;

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const gotToNextPage = () => {
    setCurrentPage((currentPage) => (currentPage + 1) % totalPages); // % to get back to first page if it's the last one
  };

  const goToPreviousPage = () => {
    setCurrentPage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1
    );
  };

  const startIndex = currentPage * CARDS_PER_PAGE; // If page 1 1*7=14 that's the index of the first card
  const endIndex = startIndex + CARDS_PER_PAGE; // 7 + 7 = 14 -> from 7 to 14
  const currentCards = cards.slice(startIndex, endIndex);

  return (
    <div className="carousel">
      <button className="previous" onClick={goToPreviousPage}>
        {"<"}
      </button>
      <div className="cards-container">
        {currentCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <button className="next" onClick={gotToNextPage}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
