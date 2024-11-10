import Image from 'next/image';
import React from 'react';
import style from './Card.module.css';
import { PiUsersThreeLight } from 'react-icons/pi';
import { FaCalendarDays } from "react-icons/fa6";
import { FaEuroSign } from "react-icons/fa";
const Card = ({ cardData ,pagination,CardsDisplay }) => {
  return (
    <div>
      <div>
        <Image
          className={cardData.image_class}
          src={cardData.image}
          alt={cardData.tit}
        />
        <div className={`${pagination || CardsDisplay ? style.cardGap_12 : style.cardGap} ${cardData.services ? style.border : ""}`}>
        <h4 className={cardData.tit_class}>{cardData.tit}</h4>
          {cardData.services?<div className={style.packag_body}>
            <div className={style.packag_price}>
            <sup className={`font-400-20`}>€</sup><span>{cardData.packag_price}</span><sub className={`font-400-18`}>/day</sub>
            </div>
            <div className={style.services}>
            {cardData.services.map((service, index) => (
        <div key={index} className={style.serviceItem}>
          {service.icon}
          <p className={`font-400-18`}>{service.text}</p>
        </div>
      ))}</div>
      <div className={style.buttonContainer}>
          <button className={` font-600-20 ${style.submitButton}`}>Book Now</button>
        </div>
          </div>:<div></div>
          }
          {     pagination &&(<div className={style.cardGap_12}> <p className={` ${style.price_pag} font-600-18`} >from <span className={`font-800-24 ${style.price}`}>34 € </span> </p>
<div className={style.timeDetls} >
            <div className={style.timeDetl}><FaCalendarDays /><p className={`font-600-16`}>{cardData.pag_date}</p></div>
            <div className={style.timeDetl}><PiUsersThreeLight /> <p className={`font-600-16`}>{cardData.pag_time}</p> </div>
          </div>
          </div>)}
          {(pagination | CardsDisplay)&&<p className={cardData.disc_class}>{cardData.disc}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
