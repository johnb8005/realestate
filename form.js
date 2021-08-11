import React from "./_snowpack/pkg/react.js";
import * as C from "./_snowpack/pkg/@nexys/react-bootstrap.js";
import * as V from "./_snowpack/pkg/@nexys/validation.js";
const shape = {
  price: {type: "number"},
  annualRevenue: {type: "number"},
  equity: {type: "number"}
};
const FormUI = ({onSuccess}) => {
  const [data, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = V.Main.checkObject(data, shape);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    onSuccess(data);
  };
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(C.Form.Wrapper, {
    label: "Price",
    errors: errors["price"]
  }, /* @__PURE__ */ React.createElement(C.Form.Input.Number, {
    errors: errors["price"],
    value: data.price,
    onChange: (price) => setData({...data, price})
  })), /* @__PURE__ */ React.createElement(C.Form.Wrapper, {
    label: "Annual Revenue",
    errors: errors["annualRevenue"]
  }, /* @__PURE__ */ React.createElement(C.Form.Input.Number, {
    errors: errors["annualRevenue"],
    value: data.annualRevenue,
    onChange: (annualRevenue) => setData({...data, annualRevenue})
  })), /* @__PURE__ */ React.createElement(C.Form.Wrapper, {
    label: "Equity",
    errors: errors["equity"]
  }, /* @__PURE__ */ React.createElement(C.Form.Input.Number, {
    errors: errors["equity"],
    value: data.equity,
    onChange: (equity) => setData({...data, equity})
  })), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Submit"));
};
export default FormUI;
