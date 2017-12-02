

export const Numbers = props => {

  const numbers = [];
  for(let i = props.from; i <= props.to; i++){
    numbers.push(i);
  }
  return (
  <div className="numbers">
  <ul>
    {
      props.odd ? 
        numbers
          .filter(num => num%2)
          .map(num => <li key={ Math.random() }>{ num }</li>) :         
      props.even ? 
        numbers
          .filter(num => !num%2)
          .map(num => <li key={ Math.random() }>{ num }</li>) : 
        
          numbers.map(num => <li key={ Math.random() }>{ num }</li>)      
    }
  </ul>
</div>)
};