import React from 'react'

const ColorInfo = ({color, item}) => {
  return (
    <div className='color-info-div'>
        <span style={{backgroundColor: color, border: 'none', width: '1.5rem', height: '1.5rem'}}></span>
        <span>{item}</span>
    </div>
  )
}

export default ColorInfo