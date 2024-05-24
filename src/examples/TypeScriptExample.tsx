import React from 'react';

function hello(amount: number){ // defining the type of parameter as number
    console.log(amount);
}

hello(12345);
// hello("alsdj"); // error: type 'string' is not assignable to parameter of type 'number'

const TypeScriptExample = ({title}) => {
  console.log(typeof (title));
  return (
    <div>
        TypeScript Example: {title}
    </div>
  )
}

export default TypeScriptExample;