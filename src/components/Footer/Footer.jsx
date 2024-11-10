import Image from 'next/image'
import React from 'react'
import style from './Footer.module.css'
import logo from './../../assets/images/logo-(1).png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={`container ${style.footer}`}>
      <Image src={logo} />
      <hr/>
      <div className={`${style.colsFooter} `} >
      <div className={`${style.colFooter} `}>
        <h4 className={`font-800-20 `}>Services</h4>

        <p>Bike and Rickshaw rental</p>
        <p>Guided Tours of Lucca</p>
        <p>Guided Bike Tour of Lucca</p>
        <p>Trip In The Tuscan Hills</p>
        <p>Transportation With Luxury Cars</p>
        <p>Wine Tours By Bus With Guide</p>

      </div>


      <div className={`${style.colFooter} `}>
        <h4 className={`font-800-20 `}>Home</h4>

        <p>Home</p>
        <p>About Us</p>
        <p>Tour Packages</p>

      </div>


      <div className={`${style.colFooter} `}>
        <h4 className={`font-800-20 `}>Provicy Policy</h4>
        <p>Terms of Use</p>
        <p>Provicy Policy</p>

      </div>


      <div className={`${style.colFooter} `}>
        <h4 className={`font-800-20 `}>Contacts</h4>
        <p className={`${style.contact}`} > <FaLocationDot />Piazza Napoleone, Lucca, Tuscany</p>
        <p className={`${style.contact}`}  > <FaPhoneAlt />	+39 346 368 5708</p>
        <p className={`${style.contact}`}  > <MdEmail />italiainlimo</p>
      </div>


      <div className={`${style.colFooter} ${style.colsocial}   `}>
        <h4 className={`font-800-20 `} >Social Media</h4>
        <div className={`${style.social}`}>
        <FaTwitter />
        <RiFacebookFill />
        <FaInstagram /> </div>
      </div>
      </div>
      <hr/>
      <p  className={`${style.copy} font-400-16 `}>Copyright © 2022.  All rights reserved.</p>
    </div>
  )
}

export default Footer
