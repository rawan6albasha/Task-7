import React from 'react'
import Image from 'next/image';
import style from './OffersCompo.module.css'
import img1 from './../../assets/images/stock-photo-traveler-tourist-woman-in-casual-clothes-hat-camera-point-thumb-finger-back-aside-on-workspace-area-2063722232-removebg-preview 1.png'
const OffersCompo = () => {
  return (
    <div className={` ${style.Offers}`}>
    <div className={`container ${style.backgrund}`}>
      <div className={style.OfferBox}>
      <h2 className={`font-800-32`}>Get Special Offers for Organizations</h2>
      <p className={`font-400-18`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <button className={`font-600-20 ${style.contact_btn}`}>Contact Us</button>
      </div>
      <Image  className={style.girlImg} src={img1}/> 
      </div>
    </div>
  )
}

export default OffersCompo
