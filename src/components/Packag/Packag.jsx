import React from 'react'
import style from './Packag.module.css'
import img1 from './../../assets/images/Rectangle 21.png'
import img2 from './../../assets/images/Rectangle 21 (1).png'
import img3 from './../../assets/images/Rectangle 21 (2).png'
import img4 from './../../assets/images/Rectangle 21 (3).png'
import Card from '../Card/Card'
import { CiCalendarDate } from "react-icons/ci";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const Packag = () => {

    const cards = [
        { id: 1, image: img1, tit: 'BIKE / RICKSHAW', image_class: style.Packag_img, tit_class: 'font-800-20',packag_price:"10",services: [
            { icon: <CiCalendarDate />, text: 'Your bike for a day' },
            { icon: <TfiMapAlt />, text: 'City App' },
            { icon: <MdOutlineLocalOffer />, text: 'Discount on Rickshaw' },
            { icon:<BiSupport />, text: 'Guaranteed Support' }
          ] },
        { id: 2, image: img2, tit: 'BIKE TOURS',  image_class: style.Packag_img, tit_class: 'font-800-20',packag_price:"30",services: [
            { icon: <CiCalendarDate />, text: 'Your bike for a day' },
            { icon: <TfiMapAlt />, text: 'City App' },
            { icon: <MdOutlineLocalOffer />, text: 'Discount on Rickshaw' },
            { icon:<BiSupport />, text: 'Guaranteed Support' }
          ] },
        { id: 3, image: img4, tit: 'BUS TRIPS',  image_class: style.Packag_img, tit_class: 'font-800-20' ,packag_price:"45",services: [
            { icon: <CiCalendarDate />, text: 'Your bike for a day' },
            { icon: <TfiMapAlt />, text: 'City App' },
            { icon: <MdOutlineLocalOffer />, text: 'Discount on Rickshaw' },
            { icon:<BiSupport />, text: 'Guaranteed Support' }
          ]},
        { id: 4, image: img3, tit: 'TRANSFER', image_class: style.Packag_img, tit_class: 'font-800-20',packag_price:"10" ,services: [
            { icon: <CiCalendarDate />, text: 'Your bike for a day' },
            { icon: <TfiMapAlt />, text: 'City App' },
            { icon: <MdOutlineLocalOffer />, text: 'Discount on Rickshaw' },
            { icon:<BiSupport />, text: 'Guaranteed Support' }
          ]},
     ];
  return (
    <div className={`container ${style.Packag} `}>
      <h2 className={`font-800-32`}>The Most Popular Packages</h2>
      <div className={` ${style.containerCard} `}>
        {cards.map((product) => (
          <Card key={product.id}  cardData={product} />
        ))}
      </div>
    </div>
  )
}

export default Packag
