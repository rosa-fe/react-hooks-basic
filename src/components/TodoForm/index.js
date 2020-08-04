import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {};

TodoForm.defaulProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const [value, setValue] = useState("");
  const { onSubmit } = props;

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    let formValue = {
      title: value,
    };
    props.onSubmit(formValue);

    //reset
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
}

export default TodoForm;
