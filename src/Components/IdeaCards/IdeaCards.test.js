import React from 'react';
import IdeaCards from '../IdeaCards';
import Idea from '../Idea'
import { shallow, mount } from 'enzyme';

describe('IdeaCards UI tests', () => {
  const ideaProps = [ { id: 1, title: 'some title', body: 'some body' }, 
                      { id: 2, title: 'some title 2', body: 'some body 2' },
                      { id: 3, title: 'some title 3', body: 'some body 3' },
                    ]
  it('should render the correct number of cards with given array size', () => {
    const renderedIdeas = shallow(<IdeaCards ideas={ ideaProps } />);

    expect(renderedIdeas.find(Idea).length).toEqual(3);
  })
})
