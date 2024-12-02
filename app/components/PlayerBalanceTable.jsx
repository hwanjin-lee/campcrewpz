"use client";
import React, { useState } from "react";
import { paginate } from "../../util/paginate";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import styles from "./PlayerStatsTable.module.css";
import _ from "lodash";
import {
  IconSquareCheckFilled,
  IconSquare,
  IconCaretUpDownFilled,
  IconCaretDownFilled,
  IconCaretUpFilled,
} from "@tabler/icons-react";

const PlayerBalanceTable = ({ players }) => {
  const [currentPage, setCurrentPage] = useState(1); //default 1
  const [query, setQuery] = useState(""); //Search Feature
  const [pageSize, setPageSize] = useState(20); //set able 5, 10, 30
  const [sortColumn_path, setSortColumn_path] = useState("balance");
  const [sortColumn_order, setSortColumn_order] = useState("desc");
  const [chosenPlayer, setChosenPlayer] = useState("");

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const searched = players.filter((data) => {
    if (query === "") {
      return data;
    } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }
  });
  const sorted = _.orderBy(searched, [sortColumn_path], [sortColumn_order]);
  const paginated = paginate(sorted, currentPage, pageSize);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (path) => {
    if (path === sortColumn_path) {
      setSortColumn_order(sortColumn_order === "desc" ? "asc" : "desc");
      setCurrentPage(1);
    } else {
      setSortColumn_path(path);
      setSortColumn_order("desc");
      renderSortIcon(path);
      setCurrentPage(1);
    }
  };

  const renderSortIcon = (column) => {
    if (column === sortColumn_path && sortColumn_order === "desc") {
      return <div>up</div>;
    } else if (column === sortColumn_path && sortColumn_order === "asc") {
      return <div>down</div>;
    } else {
      return <div>neither</div>;
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < paginated.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const thStyler = (path) => {
    if (sortColumn_path === path) {
      return styles.thStyleCurrent;
    } else {
      return styles.thStyle;
    }
  };

  return (
    <>
      <SearchBar
        type="text"
        placeholder="Search Item"
        setChosenPlayer={setChosenPlayer}
        onSearchChange={handleSearchChange}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setQuery={setQuery}
        query={query}
      />
      <table id="playerTable">
        <thead>
          <tr>
            <th
              className={`${thStyler("name")} sticky-col`}
              onClick={() => handleSort("name")}
            >
              <div className={styles.headContainer}>
                <div>Name</div>
                <div className={styles.icon}>
                  {sortColumn_path === "name" ? (
                    <>
                      {sortColumn_order === "desc" ? (
                        <IconCaretDownFilled width={15} />
                      ) : (
                        <IconCaretUpFilled width={15} />
                      )}
                    </>
                  ) : (
                    <IconCaretUpDownFilled width={15} />
                  )}
                </div>
              </div>
            </th>
            <th
              className={`${thStyler("balance")} sticky-col`}
              onClick={() => handleSort("balance")}
            >
              <div className={styles.headContainer}>
                <div>Balance</div>
                <div className={styles.icon}>
                  {sortColumn_path === "balance" ? (
                    <>
                      {sortColumn_order === "desc" ? (
                        <IconCaretDownFilled width={15} />
                      ) : (
                        <IconCaretUpFilled width={15} />
                      )}
                    </>
                  ) : (
                    <IconCaretUpDownFilled width={15} />
                  )}
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalNumOfClient={searched.length}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </>
  );
};

export default PlayerBalanceTable;
