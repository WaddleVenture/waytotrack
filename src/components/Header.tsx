import React from "react";
import "./Header.scss";
import Button from "./Button";

type HeaderProps = {
  title: string;
  pages: string[];
  buttonText: string;
};

// Refactor : use route instead of li when pages are created ?

const Header: React.FC<HeaderProps> = ({ title, pages, buttonText }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>{title}</h1>
      </div>
      <div className="header-center">
        <ul>
          {pages.map((page, index) => (
            <li key={index}>{page}</li>
          ))}
        </ul>
      </div>
      <div className="header-right">
        <Button theme="secondary" label={buttonText} />
      </div>
    </header>
  );
};

export default Header;
