import React from "react";
import "./CardLarge.scss";
import Dropdown from "./Dropdown";

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
  action,
}) => {
  const handleDropdownSelect = (selectedOption: string) => {
    console.log("Selected option:", selectedOption);
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
      <div className="card-large-dropdown">
        {action && (
          <Dropdown
            options={[
              "Playing",
              "Completed",
              "On hold",
              "Dropped",
              "Plan to play",
            ]}
            onSelectOption={handleDropdownSelect}
          />
        )}
      </div>
    </div>
  );
};

export default CardLarge;
