"use client"
import React from 'react'
import style from './Hero.module.css'
import SearchBox from '../SearchBox/SearchBox'
const HeroHome = () => {
  return (
    <div className={` container ${style.hero_img }`}>
    <div className={style.hero_body}>
    <div className={style.head}>
        <h1 className={`font-400-72 podcast-text`}>Enjoy in the best way!</h1>
        <h4 className={`font-700-24`}>Enjoy our services for your trip anytime</h4>
        </div>

<SearchBox/>
</div>
    </div>
  )
}

export default HeroHome
