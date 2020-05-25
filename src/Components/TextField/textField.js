import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Multiple = props => {
  const { config, formik } = props;
  const [count, setCount] = useState(1);
  const fields = [];
  for (let i = 0; i < count; i++) {
    fields.push(
      <>
        <TextField
          id={config.name}
          fullWidth
          name={config.name}
          type={config.type}
          onChange={formik.handleChange}
          variant="outlined"
          value={formik.values[config.name]}
        />
        {formik.errors[config.name] && <p>{formik.errors[config.name]}</p>}
      </>
    );
  }
  return (
    <>
      {fields}
      {config.MULTIPLE && (
        <button type="button" onClick={(e) =>{e.screenX=70;console.log(e,e.clientX); setCount(count + 1)}}>
          Add
        </button>
      )}
    </>
  );
};

export default Multiple;
