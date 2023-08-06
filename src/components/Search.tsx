import React, { useState } from "react";
import "./Search.scss";

interface SearchProps {
  onSearch: (search: string) => void;
}
const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
