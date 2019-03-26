import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 0.05,
    monthlyPayment:2000,
    currency:"USD"
  };

  // componentDidMount() {
  //   this.calculateAPR();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps !== this.props) {
  //     this.calculateAPR();
  //   }
  // }

  // calculateAPR = () => {
  //   let { amount } = this.props;

  //   if (1000 < amount && amount < 5000) {
  //     this.setState({ APR: 0.05 });
  //   }
  //   if (5000 < amount && amount < 10000) {
  //     this.setState({ APR: 0.1 });
  //   }
  //   if (10000 < amount && amount < 15000) {
  //     this.setState({ APR: 0.15 });
  //   }
  //   if (15000 < amount && amount < 20000) {
  //     this.setState({ APR: 0.2 });
  //   }
  // };

  calculateMonthlyRepayment = () => {
    let { amount, months } = this.props;
    let url = 'https://ftl-frontend-test.herokuapp.com/interest?amount=';
    url+=`${amount}&numMonths=${months}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{ this.setState({ 
                                  APR: data.interestRate ,
                                  monthlyPayment: data.monthlyPayment.amount,
                                  currency:data.monthlyPayment.currency})
                                })
    console.log(this.state.monthlyPayment +"and"+ this.state.APR)
    return <p>${Math.round(this.state.monthlyPayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{Math.round(this.state.APR * 100)}%</p>;
  };

  render() {
    return (
      <div>
        <DisplayChild func={this.percentageAPR()} text="interest rate" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
