import { useEffect, useState } from 'react';
import PaginationUI from './pagination.presenter';

const Pagination = ({
  total,
  currentPage,
  onClickPage,
}: {
  total: number;
  currentPage: number;
  onClickPage: (pageNumber: number) => void;
}) => {
  const [startPage, setStartPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const getTotalPage = () => {
    setLastPage(Math.ceil(total / 10));
  };
  const updateVisiblePages = (start: number) => {
    const newPages = [];
    for (let i = start; i < start + 3 && i <= lastPage; i++) {
      newPages.push(i);
    }
    setVisiblePages(newPages);
  };
  const onClickFirst = () => {
    if (visiblePages.includes(1)) return;
    setStartPage(1);
    updateVisiblePages(1);
    onClickPage(1);
  };
  const onClickLast = () => {
    if (visiblePages.includes(lastPage)) return;
    const newStartPage =
      lastPage - (lastPage % 3 === 0 ? 2 : (lastPage % 3) - 1);
    setStartPage(newStartPage);
    updateVisiblePages(newStartPage);
    onClickPage(lastPage);
  };
  const onClickPrev = () => {
    if (visiblePages.includes(1)) return;
    const newStartPage = startPage - 3;
    setStartPage(newStartPage < 1 ? 1 : newStartPage);
    updateVisiblePages(newStartPage < 1 ? 1 : newStartPage);
    onClickPage(newStartPage);
  };
  const onClickNext = () => {
    if (visiblePages.includes(lastPage)) return;
    const newStartPage = startPage + 3;
    setStartPage(newStartPage > lastPage ? lastPage : newStartPage);
    updateVisiblePages(newStartPage > lastPage ? lastPage : newStartPage);
    onClickPage(newStartPage);
  };
  useEffect(() => {
    getTotalPage();
    updateVisiblePages(1);
  }, [total, lastPage]);
  return (
    <PaginationUI
      isFirst={visiblePages.includes(1)}
      isLast={visiblePages.includes(lastPage)}
      visiblePages={visiblePages}
      currentPage={currentPage}
      onClickPage={onClickPage}
      onClickFirst={onClickFirst}
      onClickLast={onClickLast}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  );
};
export default Pagination;
