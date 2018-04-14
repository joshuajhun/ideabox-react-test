import React from 'react'

const Idea = ({ id, title, body, removeIdea }) => { 
  return (
    <article> 
      <p className='title'> {title }</p>
      <p className='body'> { body }</p>
      <button className='remove' 
              onClick={() => removeIdea(id)}> remove me </button>
    </article>
  )
}

export default Idea;
