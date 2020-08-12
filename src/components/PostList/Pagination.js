import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
};

function Pagination(props) {
  let { _page, _limit, _totalRows } = props.pagination || {};
  let { onChangePage } = props;
  let hangleChangePage = (page) => {
    if (onChangePage) {
      onChangePage(page);
    }
  };
  let totalPage = Math.ceil(_totalRows / _limit);
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => hangleChangePage(_page - 1)}>
        Pre
      </button>
      <button
        disabled={_page >= totalPage}
        onClick={() => hangleChangePage(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
