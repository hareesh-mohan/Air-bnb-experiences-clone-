import React from 'react'
import katie from '../images/katie.png'
import star from '../images/star.png'
function Card(props) {
    console.log(props);
  return (
    <div className='card'>
      <img src={`../images/${props.img}`} className='card--image'></img>
      <div className="card--stats">
                <img src={star} className='card--star'/>
                <span>{props.rating}</span>
                <span className='grey'>{props.next}</span>
                <span className='grey'>{props.country}</span>
                </div>
                <p>{props.para1}</p>
                <p><span className='bold'>{props.para2}</span></p>

           
    </div>
  )
}

export default Card
