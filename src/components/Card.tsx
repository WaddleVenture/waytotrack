import React from "react";
import "./Card.scss";
import Dropdown from "./Dropdown";

type CardProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  onClickCard?: () => void;
  action?: boolean;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  onClickCard,
  action,
}) => {
  const handleDropdownSelect = (selectedOption: string) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="card-container" onClick={onClickCard}>
      <img src={image} alt={title} className="image" />
      <div className="card-text">
        {title && <h1>{title}</h1>}
        {subtitle && (
          <div className="subtitle-container">
            <h2>{subtitle}</h2>
            <div className="dropdown-container">
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
        )}
      </div>
    </div>
  );
};

export default Card;
