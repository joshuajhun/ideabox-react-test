import { shallow } from 'enzyme';
import App from '../App';
import React from 'react';
import Form from '../Form';
import IdeaCards from '../IdeaCards';

describe('App tests', () => {
  describe('App defaults', () => { 
    it('should have default state', () => {
      const renderedApp = shallow(<App />);
      const expectation = [];

      expect(renderedApp.state('ideas')).toEqual(expectation)
    });
  })
  describe('submitIdea / removeIdea tests', () => {
    it('when submitIdea is called it should add to the state', () => {
      const renderedApp = shallow(<App />);
      const expectation = [ expect.objectContaining({
        id: expect.any(Number), 
        title: 'some title' ,
        body: 'some body' }) ]

      renderedApp.instance().submitIdea({ title: 'some title', body: 'some body' });

      expect(renderedApp.state('ideas')).toEqual(expectation);
    });
    it('should remove an idea when removeIdea is called', () => {
      const renderedApp = shallow(<App />); 
      const currentState = [ { id: 1, title: 'some title', body: 'some body' }]
      const expectation = [];

      renderedApp.setState({ ideas: currentState })
      renderedApp.instance().removeIdea(1);

      expect(renderedApp.state('ideas')).toEqual(expectation)
    })
  describe('App UI tests', () => {
    it('should render the Form component', () => {
      const renderedApp = shallow(<App />);

      expect(renderedApp.find(Form).length).toEqual(1);
    })
    it('should render IdeaCards component', () => {
      const renderedApp = shallow(<App />);

      expect(renderedApp.find(IdeaCards).length).toEqual(1);
    })
  })
 });
})

