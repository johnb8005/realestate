import React from "./_snowpack/pkg/react.js";
import {title, github} from "./config.js";
import * as U from "./utils.js";
import FormUI from "./form.js";
const interest = 0.012;
const Result = ({data}) => {
  const mortgage = data.price - data.equity;
  const interestAmount = mortgage * interest / 12;
  const extraCost = data.price / 100 / 12;
  const amortizationThreshold = data.price / 3;
  const toAmortizationThreshold = amortizationThreshold - data.equity;
  const amortization = toAmortizationThreshold > 0 ? toAmortizationThreshold / (12 * 15) : 0;
  const totalCost = interestAmount + amortization + extraCost;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Detailed Cost"), /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Interest Rate"), /* @__PURE__ */ React.createElement("td", null, U.formatPercent(interest))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Interest"), /* @__PURE__ */ React.createElement("td", null, U.formatPrice(interestAmount))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Amortization"), /* @__PURE__ */ React.createElement("td", null, U.formatPrice(amortization))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Extra Cost"), /* @__PURE__ */ React.createElement("td", null, U.formatPrice(extraCost))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Total Cost"), /* @__PURE__ */ React.createElement("th", null, U.formatPrice(totalCost)))), /* @__PURE__ */ React.createElement("h2", null, "Detailed Calculation"), /* @__PURE__ */ React.createElement("table", {
    className: "table table-striped"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Mortgage"), /* @__PURE__ */ React.createElement("td", null, U.formatPrice(mortgage))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Equity Ratio"), /* @__PURE__ */ React.createElement("td", null, U.formatPercent(data.equity / data.price))), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, "Affordability"), /* @__PURE__ */ React.createElement("td", null, U.formatPercent(amortization)))));
};
export default () => {
  const [data, setData] = React.useState(void 0);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(FormUI, {
    onSuccess: (v) => setData(v)
  }), data && /* @__PURE__ */ React.createElement(Result, {
    data: {
      annualRevenue: 190 * 1e3,
      equity: 260 * 1e3,
      price: 750 * 1e3
    }
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: github.url
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-code"
  }), " Source"), " available under MIT license. Contributions are welcome."));
};
