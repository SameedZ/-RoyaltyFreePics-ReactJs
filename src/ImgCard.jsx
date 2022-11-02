import React from 'react'
import './Imgcard.css';


const ImgCard = (props)=> {

  console.log(props)
    
  return (

    <li>
      <a href className="card">
        <img src={props.props.urls.small} className="card__image" alt="Nothing" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src={props.props.user.profile_image.small} alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{props.props.user.first_name}</h3>            
              <span className="card__status">{props.props.created_at}</span>
            </div>
          </div>
          <p className="card__description">{props.props.description}</p>
        </div>
      </a>      
    </li>


  )
}



export default ImgCard;