import React from "react";
import "./Card.scss";

type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  onClickCard?: () => void;
  onAction?: () => void;
  action?: "+" | "-";
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  onClickCard,
  onAction,
  action,
}) => {
  const handleActionClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent elements
    if (onAction) {
      onAction();
    }
  };

  return (
    <div className="card-container" onClick={onClickCard}>
      <img src={image} alt={title} className="image" />
      <div className="card-text">
        {title && <h1>{title}</h1>}
        {subtitle && (
          <div className="subtitle-container">
            <h2>{subtitle}</h2>
            {action && <span onClick={handleActionClick}>{action}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
