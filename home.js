import React from "./_snowpack/pkg/react.js";
import {title, github} from "./config.js";
import FormUI from "./form.js";
import Result from "./result.js";
export default () => {
  const [data, setData] = React.useState(void 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(FormUI, {
    onSuccess: (v) => setData(v)
  }), data && /* @__PURE__ */ React.createElement(Result, {
    data
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: github.url
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-code"
  }), " Source"), " available under MIT license. Contributions are welcome."));
};
