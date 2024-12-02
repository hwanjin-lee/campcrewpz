"use client";
// import React from "react";
// import _ from "lodash";
// import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
// import styles from "./Pagination.module.css";

// const Pagination = ({
//   totalNumOfClient,
//   currentPage,
//   pageSize,
//   onNextPage,
//   onPrevPage,
//   onPageChange,
// }) => {
//   const numOfPages = Math.ceil(totalNumOfClient / pageSize);
//   const arrOfPages = _.range(1, numOfPages + 1);

//   return (
//     <div className={styles.container}>
//       {currentPage > 1 ? (
//         <div className={styles.pageBtn} onClick={() => onPrevPage()}>
//           <IconCaretLeftFilled />
//         </div>
//       ) : (
//         <div className={styles.disabled}>
//           <IconCaretLeftFilled />
//         </div>
//       )}
//       {arrOfPages.map((page, index) => (
//         <div
//           className={
//             currentPage === page ? styles.pageBtnActive : styles.pageBtn
//           }
//           key={index}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </div>
//       ))}
//       {currentPage < arrOfPages.length ? (
//         <div className={styles.pageBtn} onClick={() => onNextPage()}>
//           <IconCaretRightFilled />
//         </div>
//       ) : (
//         <div className={styles.disabled}>
//           <IconCaretRightFilled />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pagination;

//=======================================

import React from "react";
import styles from "./Pagination.module.css";
import _ from "lodash";

const Pagination = ({
  totalNumOfClient,
  currentPage,
  pageSize,
  onNextPage,
  onPrevPage,
  onPageChange,
}) => {
  const numOfPages = Math.ceil(totalNumOfClient / pageSize);
  const visiblePages = 5; // Number of visible page numbers
  const arrOfPages = _.range(1, numOfPages + 1);

  const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const endPage = Math.min(startPage + visiblePages - 1, numOfPages);

  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.page} onClick={() => onPrevPage()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div> */}
      {arrOfPages.map((page) => {
        if (page >= startPage && page <= endPage) {
          return (
            <div
              onClick={() => onPageChange(page)}
              className={
                page === currentPage
                  ? `${styles["page_active"]}`
                  : `${styles["page"]}`
              }
              key={page}
            >
              <div>{page}</div>
            </div>
          );
        } else if (page === startPage - 1) {
          return (
            <>
              <div className={styles.page} onClick={() => onPageChange(1)}>
                1
              </div>
              <div className={styles.page} key={page}>
                ...
              </div>
            </>
          );
        } else if (page === endPage + 1) {
          return (
            <>
              <div className={styles.page} key={page}>
                ...
              </div>
              <div
                className={styles.page}
                onClick={() => onPageChange(numOfPages)}
              >
                {numOfPages}
              </div>
            </>
          );
        }
        return null;
      })}
      {/* <div className={styles.page} onClick={() => onNextPage()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div> */}
    </div>
  );
};

export default Pagination;
