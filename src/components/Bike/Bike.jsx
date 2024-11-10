import React from 'react'
import Image from 'next/image';
import style from './Bike.module.css'
import img1 from './../../assets/images/bikepicture.png'
const Bike = () => {
  return (
    <div className={` ${style.bike}`}>
    <div className={`container ${style.backgrund}`}>

 
      <div className={style.dashbord}>
      <h2 className={`font-800-32`}>Book Now Bike</h2>

      <form className={style.bookingForm}>
        <div className={style.formGroup}>
          <div className={style.inputContainer}>
            <label className={` font-600-18 ${style.label}`}>Name and Surname</label>
            <input className={`font-400-16`}  type="text" placeholder="Enter your name and surname" />
          </div>
          <div className={style.inputContainer}>
            <label className={` font-600-18 ${style.label}`}>Email Address</label>
            <input className={`font-400-16`}  type="email" placeholder="Enter your email address" />
          </div>
        </div>
        <div className={style.formGroup}>
          <div className={style.inputContainer}>
            <label className={` font-600-18 ${style.label}`}>Telephone Number</label>
            <input className={`font-400-16`}  type="text" placeholder="Enter your telephone number" />
          </div>
          <div className={style.inputContainer}>
            <label className={` font-600-18  ${style.label}`}>Service Type</label>
            {/* <input   type="text" placeholder="Select the service type" /> */}
            <select className={`font-400-16`}>
            <option>Select the service type</option>
            <option value="type1">Service Type 1</option>
            <option value="type2">Service Type 2</option>
            <option value="type3">Service Type 3</option>
          </select>
          </div>
        </div>
        <div className={style.formGroup}>
          <div className={style.inputContainer}>
            <label className={` font-600-18 ${style.label}`}>Date</label>
            <input className={`font-400-16`}  type="date" />
          </div>
          <div className={style.inputContainer}>
            <label className={` font-600-18 ${style.label}`}>Time</label>
            <input className={`font-400-16`} type="time" />
          </div>
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" className={` font-600-20 ${style.submitButton}`}>Book Now</button>
        </div>
      </form>

      </div>
      <Image  className={style.bikeImg} src={img1}/> 
      </div>

    </div>
  )
}

export default Bike
