import React from "react";

function InputText({formik, name, displayText, type}) {
  return (
    <div className="">
      <label htmlFor="displayName">{ displayText }</label>
      <input
        type={type || "text"}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      <div className="text-red-500">{formik.errors[name] || null}</div>
    </div>
  );
}

export default InputText;
