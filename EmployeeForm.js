import React, { useState } from 'react';

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(employee);
    setEmployee({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
