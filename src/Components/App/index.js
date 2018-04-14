import React, { Component } from 'react';
import Form from '../Form';
import IdeaCards from '../IdeaCards';
class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    }
  }

 submitIdea = (idea) => {
    const newIdea =  { id: Date.now(), ...idea };
    const ideas = [ ...this.state.ideas, newIdea ];
    this.setState({ ideas });
  }

  removeIdea = (id) =>  {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas });
  }
  render() {
    return ( 
       <div>
        <Form submitIdea={ this.submitIdea } />
        <IdeaCards ideas={ this.state.ideas }
                   removeIdea={ this.removeIdea }/>
       </div>
    )
  }
}
export default App
