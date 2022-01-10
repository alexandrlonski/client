import React, { FC } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../redux/action-creators/film";
import { RootState } from "../../../redux/reducer/rootReducer";
import "./Pagination.scss";

const PaginationList: FC = () => {
  const { pageView } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const pageCount = Math.ceil(pageView.count / pageView.limit);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination className="">
      {pages.map((page) => (
        <Pagination.Item key={page} active={pageView.pageNumber === page} onClick={() => dispatch(changePage(page))}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationList;
