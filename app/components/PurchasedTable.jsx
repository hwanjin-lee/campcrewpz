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

const PurchasedTable = ({ PurchasedItems }) => {
  const [currentPage, setCurrentPage] = useState(1); //default 1
  const [query, setQuery] = useState(""); //Search Feature
  const [pageSize, setPageSize] = useState(20); //set able 5, 10, 30
  const [sortColumn_path, setSortColumn_path] = useState("lastTransaction");
  const [sortColumn_order, setSortColumn_order] = useState("desc");
  const [chosenPlayer, setChosenPlayer] = useState("");

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const searched = PurchasedItems.filter((data) => {
    if (query === "") {
      return data;
    } else if (data.item.toLowerCase().includes(query.toLowerCase())) {
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
              className={`${thStyler("item")} sticky-col`}
              onClick={() => handleSort("item")}
            >
              <div className={styles.headContainer}>
                <div>Item</div>
                <div className={styles.icon}>
                  {sortColumn_path === "item" ? (
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
              className={`${thStyler("amount")} sticky-col`}
              onClick={() => handleSort("amount")}
            >
              <div className={styles.headContainer}>
                <div>Popularity</div>
                <div className={styles.icon}>
                  {sortColumn_path === "amount" ? (
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
              className={`${thStyler("lastTransaction")} sticky-col`}
              onClick={() => handleSort("lastTransaction")}
            >
              <div className={styles.headContainer}>
                <div>Last Transaction</div>
                <div className={styles.icon}>
                  {sortColumn_path === "lastTransaction" ? (
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
          {paginated.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.amount}</td>
              <td>
                {/* {Number(Date.parse(item.lastTransaction))} :{" "} */}
                {new Date(item.lastTransaction).toLocaleString(
                  "en-US",
                  options
                )}
              </td>
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

export default PurchasedTable;

//2023-11-19T18:22:58.839Z

//Fri Nov 03 07:34:11 UTC 2023

//2023-11-03T07:34:11.738Z
