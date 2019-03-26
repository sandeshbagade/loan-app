

## Installation

### Setup

- Clone the repository 
- From your terminal, `cd` into the folder
- Run the command `npm install` to install the dependencies
- To run the application type `npm start` 

## Documentation

### Amount Range Slider

- A controlled component that can accept number values between 500 and 5000
- Increases or decreases by a number value of 100 at a time ('step' prop)

### Months Range Slider

- A controlled component that can accept number values between 6 and 24
- The values indicate the amount of years rather than months
- Increases or decreases by a number value of 1 Month at a time ('step' prop), to represent changes of 6 months at a time

### Display component

- Must have two props: 'Months' and 'amount', both values are numbers.

### DisplayChild component

- Must have two props: 'func' and 'text'. 'Func' takes in a function as its value and 'text' a string.
