import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import List from "./List";
import Pagination from "./Pagination";
import queryString from "query-string";
import Form from "./Form";

PostList.propTypes = {};

function PostList(props) {
  let [postList, setPostList] = useState([]);
  let [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    let FetchData = async () => {
      try {
        let paramsString = queryString.stringify(filter);
        let response = await fetch(
          `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        );
        let responeJson = await response.json();
        if (responeJson.data) {
          setPostList(responeJson.data);
          setPagination(responeJson.pagination);
        }
      } catch (error) {}
    };
    FetchData();
  }, [filter]);

  let handleChangePage = (_page) => {
    setFilter({ ...filter, _page });
  };

  return (
    <React.Fragment>
      <Form />
      <List data={postList} />;
      <Pagination onChangePage={handleChangePage} pagination={pagination} />
    </React.Fragment>
  );
}

export default PostList;
