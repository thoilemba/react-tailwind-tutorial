// onChange = event handler used primarily with form elements eg. input, textarea, select, radio
//  Triggers a function every time the value of the input changes

import { useState } from "react";

const OnChangeExample = () => {
  const [item, setItem] = useState("Guest");
  const [numb, setNumb] = useState(0);
  const [payment, setPayment] = useState("");

  function handleItemChange (event) {
    setItem(event.target.value);
  };

  function handleNumbChange (event) {
    setNumb(event.target.value);
  };

  function handlePaymentChange (event) {
    setPayment(event.target.value);
  };

  return (
    <div>
      <input className="border-2 border-blue-400" value={item} type="text" onChange={handleItemChange}/>
      <p>Item: {item}</p>

      <input className="border-2 border-blue-400" value={numb} type="number" onChange={handleNumbChange} />
      <p>Number: {numb}</p>

      <select className="border-2 border-blue-400" value={payment} type="number" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Net Banking">Net Banking</option>
        <option value="UPI">UPI</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
};

export default OnChangeExample;

