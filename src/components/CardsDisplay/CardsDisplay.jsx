import React from 'react'
import style from './CardsDisplay.module.css'
import img1 from './../../assets/images/Rectangle 18.png'
import img2 from './../../assets/images/Rectangle 19.png'
import img3 from './../../assets/images/Rectangle 20 (2).png'
import img4 from './../../assets/images/Rectangle 20.png'
import Card from '../Card/Card';
const CardsDisplay = () => {
    const cards = [
    { id: 1, image: img1, tit: 'Bike and rickshaw rental', disc: 'Book your quality vehicle quickly for an hour or all day!', image_class: style.Display_img, tit_class: 'font-700-24', disc_class: 'font-400-18' },
    { id: 2, image: img2, tit: 'Taxi and NCC service', disc: 'Live the real Lucchese experience by visiting the suburbs by bike!', image_class: style.Display_img, tit_class: 'font-700-24', disc_class: 'font-400-18' },
    { id: 3, image: img4, tit: 'Taxi and NCC service', disc: 'Do you need not only a bike but also a driver? Then you have found the right place!', image_class: style.Display_img, tit_class: 'font-700-24', disc_class: 'font-400-18' },
    { id: 4, image: img3, tit: 'Bus Package', disc: 'Do you need not only a bike but also a driver? Then you have found the right place!', image_class: style.Display_img, tit_class: 'font-700-24', disc_class: 'font-400-18' },
 ];
  return (
    <div className={`container ${style.containerCard} `}>
        {cards.map((product) => (
          <Card key={product.id} CardsDisplay={true} cardData={product} />
        ))}
      </div>

  )
}

export default CardsDisplay
