## How this app works

- As a user drags the sliders, their onChange handlers dynamically set the App component state with their values.
- The Display component takes the App state values as 'year' and 'amount' props respectively and uses their values to automatically calculate both 'APR' percentages and a monthly repayment.
- Both APR and repayments are displayed within a reusable DisplayChild component.


## Demo 

<p class="codepen" data-height="533" data-theme-id="dark" data-default-tab="js,result" data-user="GavBarosee" data-slug-hash="PVwMvG" style="height: 533px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="React Loan Calculator ">
  <span>See the Pen <a href="https://codepen.io/GavBarosee/pen/PVwMvG/">
  React Loan Calculator </a> by Gavish Barosee (<a href="https://codepen.io/GavBarosee">@GavBarosee</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


## Installation

### Setup

- unzip the compressed folder
- from your terminal, `cd` into the folder
- run the command `npm i` to install the dependencies
- to run the application type `npm start` after installing the dependencies

### Tests

- while still in the directory from your terminal, run `npm run test` to run any default snapshot tests

## Documentation

### Amount Range Slider

- a controlled component that can accept number values between 1000 and 20000
- increases or decreases by a number value of 100 at a time ('step' prop)

### Years Range Slider

- a controlled component that can accept number values between 1 and 5
- the values indicate the amount of years rather than months
- increases or decreases by a number value of 0.5 years at a time ('step' prop), to represent changes of 6 months at a time

### Display component

- must have two props: 'years' and 'amount', both values are numbers.

### DisplayChild component

- must have two props: 'func' and 'text'. 'Func' takes in a function as its value and 'text' a string.
