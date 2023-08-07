import React from "react";
import "./CardLarge.scss";

type CardLargeProps = {
  image?: string;
  title?: string;
  description?: string;
  onClickCard?: () => void;
  onAction?: () => void;
  action?: "+" | "-";
};

const CardLarge: React.FC<CardLargeProps> = ({
  image,
  title,
  description,
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
    <div className="card-large-container" onClick={onClickCard}>
      <img src={image} alt={title} className="image" />
      <div className="card-large-text">
        {title && <h1>{title}</h1>}
        {description && (
          <div className="card-large-description">
            <p>{description}</p>
          </div>
        )}
      </div>
      {action && (
        <div className="card-large-action">
          <span onClick={handleActionClick}>{action}</span>
        </div>
      )}
    </div>
  );
};

export default CardLarge;
