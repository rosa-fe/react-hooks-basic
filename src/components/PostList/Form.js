import React, { useRef, createRef } from "react";
import PropTypes from "prop-types";

function Form(props) {
  let formRef = createRef(null);
  console.log(formRef);
  return (
    <form>
      <input ref={formRef} />
    </form>
  );
}

Form.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Form;
