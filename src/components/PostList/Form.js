import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [searchTerm, setSearchTerm] = useState("");
  let typingTimeoutRef = useRef(null);
  const { onSubmit } = props;

  let handleSearch = (e) => {
    if (!onSubmit) return;
    setSearchTerm(e.target.value);
    let value = e.target.value;

    //clear timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value);
    }, 500);
  };
  return (
    <form>
      <input name="search" onChange={handleSearch} />
    </form>
  );
}

Form.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Form;
