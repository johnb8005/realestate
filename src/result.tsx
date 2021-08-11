import React from "react";
import { FormData } from "./type";
import * as U from "./utils";

const interest = 0.012;

const Result = ({ data }: { data: FormData }) => {
  const mortgage = data.price - data.equity;
  const interestAmount = (mortgage * interest) / 12;

  const extraCost = data.price / 100 / 12;

  const amortizationThreshold = data.price / 3;
  const toAmortizationThreshold = amortizationThreshold - data.equity;
  const amortization =
    toAmortizationThreshold > 0 ? toAmortizationThreshold / (12 * 15) : 0;

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

export default Result;
