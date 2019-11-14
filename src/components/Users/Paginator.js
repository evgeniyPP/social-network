import React, { useState } from "react";
import s from "./Users.module.css";
import cn from "classnames";

const Paginator = ({
  totalCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 15
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNum = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNum = portionNumber * portionSize;

  const prev = () => {
    setPortionNumber(portionNumber - 1);
  };

  const next = () => {
    setPortionNumber(portionNumber + 1);
  };

  return (
    <div className={s.paginator}>
      {portionNumber > 1 ? (
        <button onClick={prev}>PREV</button>
      ) : (
        <button disabled>PREV</button>
      )}

      {pages
        .filter(
          page => page >= leftPortionPageNum && page <= rightPortionPageNum
        )
        .map(page => (
          <span
            className={cn(
              { [s.selectedPage]: currentPage === page },
              s.pageNumber
            )}
            key={page}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        ))}

      {portionCount > portionNumber ? (
        <button onClick={next}>NEXT</button>
      ) : (
        <button disabled>NEXT</button>
      )}
    </div>
  );
};

export default Paginator;
