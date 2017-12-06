import React from 'react';

export const Numbers = props => {

  let numbers = [];
  for (let i = props.from; i <= props.to; i++) {
    numbers.push(i);
  }
  numbers = props.odd
    ? numbers.filter(num => num % 2)
    : props.even
      ? numbers.filter(num => !num % 2)
      : numbers;

  return (
    <div className="numbers">
      <ul>
        {
          numbers.map(num => <li key={Math.random()}>{num}</li>)
        }
      </ul>
    </div>
  )
};