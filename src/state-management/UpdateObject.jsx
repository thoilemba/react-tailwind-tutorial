import { useState } from "react";

const UpdateObject = () => {
  const [person, setPerson] = useState({
    id: 1,
    name: "John",
    age: 25,
    address: {
      city: "Nottingham",
      state: "Mordor",
      pin: 123456
    }
  });

  function handleIDChange (event) {
    // setPerson({id: event.target.value}); // if we set like this, the entire object will be replaced by the passed object
    setPerson(p => ({ ...person, id: event.target.value }));
  }

  function handleNameChange (event) {
    setPerson(p => ({ ...person, name: event.target.value }));
  }

  function handleAgeChange (event) {
    setPerson({ ...person, age: event.target.value });
  }

  function handleAddressChange (event) {
    setPerson({ ...person, address: { ...person.address, state: event.target.value } });
  }

  // Using a single event handler for multiple fields 
  // function handleChange (e) {
  //   setPerson({ ...person, [e.target.name]: e.target.value });
  // }

  return (
    <div>
      <p>ID: {person.id}</p>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Address: {person.address.city}, {person.address.state}, {person.address.pin}</p>

      <input className="border-2" type="number" value={person.id} onChange={handleIDChange} /><br />
      <input className="border-2" type="text" value={person.name} onChange={handleNameChange} /><br />
      <input className="border-2" type="number" value={person.age} onChange={handleAgeChange} /><br />
      <input className="border-2" type="text" value={person.address.state} onChange={handleAddressChange} /><br />

      {/* Adding the name attribute to each input element to used the single event handler */}
      {/* <input type="number" name="id" value={person.id} onChange={handleChange} /><br />
      <input type="text" name="name" value={person.name} onChange={handleChange} /><br />
      <input type="number" name="age" value={person.age} onChange={handleChange} /><br /> */}
    </div>
  );
};

export default UpdateObject;
