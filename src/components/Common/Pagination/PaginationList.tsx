import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeFilmsPage } from "../../../redux/action-creators/film";
import { RootState } from "../../../redux/reducer/rootReducer";
import "./Pagination.scss";

const PaginationList: FC = () => {
  const { count, limit, pageNumber } = useSelector(
    (state: RootState) => state.filmsPageView
  );
  const dispatch = useDispatch();
  const pageCount = Math.ceil(count / limit);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={pageNumber === page}
          onClick={() => dispatch(changeFilmsPage(page))}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationList;
