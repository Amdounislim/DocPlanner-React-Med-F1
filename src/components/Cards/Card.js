import React from 'react'
import './Card.css'
const Card = ({ el }) => {
    return (
        <div className='card' style={{ backgroundColor: el.color }}>
            <img src={el.image} alt='logo-doctor' />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <select>
                {el.country1.map((count, index) => <option key={index}>{count}</option>)}
            </select>
            {el.country2 && (<select>
                {el.country2.map((count, index) => <option key={index}>{count}</option>)}
            </select>)}
        </div>
    )
}

export default Card
