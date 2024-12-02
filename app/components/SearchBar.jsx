"use client";
import React from "react";
import styles from "./SearchBar.module.css";
import { IconX } from "@tabler/icons-react";

const SearchBar = ({
  onSearchChange,
  placeholder,
  setQuery,
  query,
  setChosenPlayer,
}) => {
  //   const navigate = useNavigate();
  const handleClear = () => {
    document.getElementById("search-input").value = "";
    setChosenPlayer("");
    setQuery("");
    // navigate("/customer");
  };

  const preventEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.input}
          onKeyUp={(e) => preventEnterSubmit(e)}
          id="search-input"
          type="text"
          placeholder={placeholder}
          onChange={(event) => onSearchChange(event)}
          value={query}
        />
      </div>
      {query !== "" ? (
        <div className={styles.clear} onClick={() => handleClear()}>
          <IconX />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
