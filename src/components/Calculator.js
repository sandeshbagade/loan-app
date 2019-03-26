import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/App.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 2000,
    monthValue: 8
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleMonthChange = value => {
    this.setState({ monthValue: value });
  };

  render() {
    let { amountValue, monthValue } = this.state;

    return (
      <div className="App">
        <h4>I want to borrow ${amountValue}</h4>
        <InputRange
          step={100}
          maxValue={5000}
          minValue={500}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          Over {monthValue} months
        </h4>
        <InputRange
          step={1}
          maxValue={24}
          minValue={6}
          value={monthValue}
          onChange={this.handleMonthChange}
        />
        <Display months={monthValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;
