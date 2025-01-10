import React from 'react';
class EmployeeForm extends
React.Component {
	constructor(props) {
		super(props);
		this.state = {name: '', email: '', title: '',
					department: ''};
	}
	function handleNameChange(){
		alert('!');
	}
	function handleEmailChange(){
		alert('!');
	}
	function handleTitleChange(){
		alert('!');
	}
	function handleDepartmentChange(){
		alert('!');
	}
render(){
	return (
	<>
			<label for="name">Name: <input type="text" id="name" onChange={handleNameChange} /></label><br/>
			<label for="email">E-Mail: <input type="text" id="email" onChange={handleEmailChange} /></label><br/>
			<label for="title">Title: <input type="text" id="title" onChange={handleTitleChange} /></label><br/>
			<label for="department">Department: <input type="text" id="department" onChange={handleDepartmentChange} /></label><br/>
			<button type="submit" id="submit">Submit</button>
			</>
			);
}
	}
export default EmployeeForm;
}