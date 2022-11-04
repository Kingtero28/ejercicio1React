import React from 'react'

const CardButton = ({backgroundObj, getRandomAll}) => {
  return (
    <button className='card__btn' 
    style={backgroundObj} 
    onClick={getRandomAll}>
    &#62;</button>
  )
}

export default CardButton