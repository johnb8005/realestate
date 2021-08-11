import React from "./_snowpack/pkg/react.js";
import * as U from "./utils.js";
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
export default Result;
