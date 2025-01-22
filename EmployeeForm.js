import React, { useState, useEffect } from 'react';

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
  });
const [submittedEmployee, setSubmittedEmployee] = useState(null);

  useEffect(() => {
    const savedEmployee = localStorage.getItem('employee');
    if (savedEmployee) {
      setEmployee(JSON.parse(savedEmployee));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.email || !employee.phone) {
      alert('All fields are required!');
      return;
    }
    if (typeof props.onSubmit === 'function') {
      props.onSubmit(employee);
    } else {
      console.error('props.onSubmit is not a function');
    }
    localStorage.setItem('employee', JSON.stringify(employee));
    setSubmittedEmployee(employee);
    setEmployee({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedEmployee && (
        <div>
          <h2>Submitted Employee Data:</h2>
          <p><strong>Name:</strong> {submittedEmployee.name}</p>
          <p><strong>Email:</strong> {submittedEmployee.email}</p>
          <p><strong>Phone:</strong> {submittedEmployee.phone}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
