import React from 'react'

function game({ game }) {
  const { id, title, description, link, image } = game;
  return (
    <div className='game'>
      <div>
        <div>
          <img src={image} width={250} height={150} />
          <h4>{title}</h4>
          <h5>{description}</h5>
          <a href={link} target='_blank'>Videoyu izlemek için</a>

        </div>
      </div>
    </div>
  )
}

export default game