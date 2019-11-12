import React from "react";
import s from "./Users.module.css";

const Paginator = ({ totalCount, pageSize, onPageChanged, currentPage }) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  if (pagesCount > 15) pagesCount = 15;
  const pagesNum = [];
  for (let i = 1; i <= pagesCount; i++) pagesNum.push(i);

  return (
    <div>
      {pagesNum.map(num => (
        <span
          className={currentPage === num && s.selectedPage}
          onClick={() => {
            onPageChanged(num);
          }}
        >
          {num}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
