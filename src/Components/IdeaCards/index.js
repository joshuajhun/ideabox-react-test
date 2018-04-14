import React from 'react';
import Idea from '../Idea';

const IdeaCards = ({ ideas, removeIdea }) => {
  const renderedCards = ideas.map(idea => <Idea { ...idea }
                                            key= { idea.id}
                                            removeIdea= { removeIdea }/>)
  return (
    <section>
      { renderedCards }
    </section>
  )
};

export default IdeaCards;
