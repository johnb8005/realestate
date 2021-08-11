import React from "react";
import { title, github } from "./config";

import * as U from "./utils";
import { FormData } from "./type";
import FormUI from "./form";

const interest = 0.012;

//equity+amortization*12*15 = price

const Result = ({ data }: { data: FormData }) => {
  const mortgage = data.price - data.equity;
  const interestAmount = (mortgage * interest) / 12;

  const extraCost = data.price / 100 / 12;

  const amortizationThreshold = data.price / 3;
  const toAmortizationThreshold = amortizationThreshold - data.equity;
  const amortization =
    toAmortizationThreshold > 0 ? toAmortizationThreshold / (12 * 15) : 0;
  //(data.price / 3 - data.equity) / (12 * 5);

  const totalCost = interestAmount + amortization + extraCost;

  return (
    <>
      <h2>Detailed Cost</h2>

      <table className={"table table-striped"}>
        <tr>
          <td>Interest Rate</td>
          <td>{U.formatPercent(interest)}</td>
        </tr>
        <tr>
          <td>Interest</td>
          <td>{U.formatPrice(interestAmount)}</td>
        </tr>
        <tr>
          <td>Amortization</td>
          <td>{U.formatPrice(amortization)}</td>
        </tr>
        <tr>
          <td>Extra Cost</td>
          <td>{U.formatPrice(extraCost)}</td>
        </tr>
        <tr>
          <th>Total Cost</th>
          <th>{U.formatPrice(totalCost)}</th>
        </tr>
      </table>

      <h2>Detailed Calculation</h2>

      <table className={"table table-striped"}>
        <tr>
          <td>Mortgage</td>
          <td>{U.formatPrice(mortgage)}</td>
        </tr>
        <tr>
          <td>Equity Ratio</td>
          <td>{U.formatPercent(data.equity / data.price)}</td>
        </tr>
        <tr>
          <td>Affordability</td>
          <td>{U.formatPercent(amortization)}</td>
        </tr>
      </table>
    </>
  );
};

export default () => {
  const [data, setData] = React.useState(undefined);

  return (
    <>
      <h1>{title}</h1>

      <FormUI onSuccess={(v) => setData(v)} />
      {data && (
        <Result
          data={{
            annualRevenue: 190 * 1000,
            equity: 260 * 1000,
            price: 750 * 1000,
          }}
        />
      )}

      <p>
        <a href={github.url}>
          <i className="fa fa-code"></i> Source
        </a>
        &nbsp;available under MIT license. Contributions are welcome.
      </p>
    </>
  );
};
