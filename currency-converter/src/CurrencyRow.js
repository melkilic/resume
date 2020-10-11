/** @format */

import React, { Component } from "react";

const CurrencyRow = (props) => {
  const { options, selectedCurrency, onChangeCurrency } = props;
  return (
    <div>
      From/To
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
