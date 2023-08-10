import React from "react";
import "./Stat.scss";

type StatProps = {
  category: string;
  number: number;
};

const Stat: React.FC<StatProps> = ({ category, number }) => {
  return (
    <div className="stat-container">
      <div className="stat-number">{number}</div>
      <div className="stat-category">{category}</div>
    </div>
  );
};

export default Stat;
