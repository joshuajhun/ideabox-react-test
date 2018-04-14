import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';
describe('Form tests', () => {
  describe('Default state', () => {
    it('Form should have a default state of empty strings', () => {
      const renderedForm = shallow(<Form />);
      const expectation = { title: '', body: '' };
      expect(renderedForm.state()).toEqual(expectation)
    })
  })
  describe('State Change', () => {
    it('should change state correctly when updateInput is called', () => {
      const renderedForm = shallow(<Form />);
      const expectation = { title: 'some title', body: 'some body' };

      renderedForm.instance().updateInput({ target: { value: 'some title', name: 'title' }})
      renderedForm.instance().updateInput({ target: { value: 'some body', name: 'body' }})

      expect(renderedForm.state()).toEqual(expectation);
    })

    it('should allow me to submit an idea', () => {
      const mockFunc = jest.fn();
      const mockPropFunc = jest.fn();
      const renderedForm = shallow(<Form submitIdea={ mockPropFunc } />);
      const expectedPropArguments = { title: 'some title', body: 'some body' }
      
      renderedForm.setState({ title: 'some title', body: 'some body' })
      renderedForm.instance().sendIdeaToApp({ preventDefault: mockFunc })
      
      expect(mockFunc).toHaveBeenCalled();
      expect(mockPropFunc).toHaveBeenCalledWith(expectedPropArguments);
    })
  })
})
