import React from 'react'

function game({ game }) {
  const { id, title, description, link, image } = game;
  return (
    <div className='game'>
      <div>
        <img className='image' src={image} />
        <h4 className='title'>{title}</h4>
        <p className='game-desc'>{description}</p>
        <div className='game-link'><a className='link' href={link} target='_blank'>Videoyu izlemek için tıkla</a></div>
      </div>
    </div>
  )
}

export default game