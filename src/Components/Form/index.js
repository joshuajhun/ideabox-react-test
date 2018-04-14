import React, { Component } from 'react';
class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '', 
      body: ''
    }
  } 
  updateInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  sendIdeaToApp = (event) => {
    event.preventDefault();
    this.props.submitIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={ this.sendIdeaToApp }>
        <input type='text' 
               value={ this.state.title }
               name='title' 
               onChange={ this.updateInput } />
        <input type='text' 
               value={ this.state.body }
               name='body'  
               onChange={ this.updateInput }/>
        <input type='submit' />
      </form>
   )
  }
}

export default Form;
