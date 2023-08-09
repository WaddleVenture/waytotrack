import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click event from reaching parent elements
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onSelectOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown-menu-container" ref={dropdownRef}>
      <div className="dropdown-menu-header" onClick={toggleDropdown}>
        <span>+</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={(event) => handleOptionSelect(option, event)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
