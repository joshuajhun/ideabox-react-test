import React from 'react'; 
import { shallow } from 'enzyme';
import Idea from '../Idea';

describe(' Idea renders the correct markup', () => {
  let idea;
  let mockPropFunc;
  beforeEach(() => {
    const props = { id: 1, title: 'some title', body: 'some body' }
    mockPropFunc = jest.fn();
    
    idea = shallow(<Idea  { ...props }
                     removeIdea={ mockPropFunc } />) 
  })
  it('When given props Idea renders as expected', () => {
    expect(idea.find('.title').text()).toEqual(' some title');
    expect(idea.find('.body').text()).toEqual(' some body');
  })
  describe('Idea prop tests', () => {
    it('should call removeIdea with the correct arguments', () => {
      const deleteButton = idea.find('.remove');
      const argsExpectation = 1;
      deleteButton.simulate('click');
      
      expect(mockPropFunc).toHaveBeenCalled();
      expect(mockPropFunc).toHaveBeenCalledWith(argsExpectation);
    })
  })
})
