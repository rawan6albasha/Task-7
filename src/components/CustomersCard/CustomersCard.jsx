import React from 'react'
import Image from 'next/image';
import style from './CustomersCard.module.css'
import img1 from './../../assets/images/Ellipse4.png'

const CustomersCard = ({cardData}) => {
  return (
    <div className={style.CustomersCard}>
      <div className={style.head}>
<Image src={img1} />
<p className={`font-400-18 dark-gray`}>{cardData.tit}</p>
      </div>
      <p className={`font-400-18 dark-gray`}>{cardData.text}</p>
    </div>
  )
}

export default CustomersCard
