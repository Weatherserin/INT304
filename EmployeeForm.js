import React, { useState } from 'react';

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
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
      position: '',
      department: '',
      email: '',
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
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;