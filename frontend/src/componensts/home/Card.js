import React from 'react'

const Card = ({img, className}) => {
  return (
    <div className={`img-card ${className}`}>
        <img src={img} alt="img"/>
        <h3>Manage your expenses</h3>
    </div>
  )
}

export default Card