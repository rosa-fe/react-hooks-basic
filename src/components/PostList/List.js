import React from "react";
import PropTypes from "prop-types";

List.propTypes = {
  data: PropTypes.array.isRequired,
  onChangePage: PropTypes.func,
};
List.defaultProps = {
  onChangePage: null,
};

function List(props) {
  let { data } = props;
  console.log("data", data);

  return (
    <ul className="post-list">
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default List;
