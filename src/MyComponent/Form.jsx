import React, { Component } from 'react';
import '../MyCSS/Form.css';
class Form extends Component {
  state = {
    lastName: '',
    name: '',
    grade: '',
    lastNameError: '',
    nameError: '',
    gradeError: ''
  };

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };
  handleFocus = (field) => {
    this.setState({ [`${field}Error`]: `You must fill in the ${field === 'lastName' ? 'last name' : field === 'name' ? 'first name' : 'grade'}` });
  }
  handleBlur = (field) => {
    if (field === 'grade') {
      const score = parseInt(this.state.grade, 10);
      if (score > 555) {
        this.setState({ grade: 'You can be admitted to studies' });
      } else {
        this.setState({ grade: 'You will need to try again next year' });
      }
    }
    this.setState({ [`${field}Error`]: '' });
  };

  render() {
    const { lastName, name, grade, lastNameError,nameError,gradeError} = this.state;

    return (
        <div className="user-Form">
            <form>
      <div>
        {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
        <label htmlFor="lastName">Last Name: </label>
        <input 
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => this.handleChange(e,'lastName')}
        onFocus= {() => this.handleFocus('lastName')}
        onBlur= {() => this.handleBlur('lastName')} 
        /> </div>
        <div>
        {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => this.handleChange(e, 'name')}
              onFocus={() => this.handleFocus('name')}
              onBlur={() => this.handleBlur('name')}
            />
          </div>
          <div>
            <label htmlFor="grade">Psychometric Score:</label>
            <input
              type="number"
              id="grade"
              value={grade}
              onChange={(e) => this.handleChange(e, 'grade')}
              onFocus={() => this.handleFocus('grade')}
              onBlur={() => this.handleBlur('grade')}
            />
            {grade && <p>{grade}</p>}
          </div>
        </form>
      </div>
      
    );
  }
}

export default Form;
