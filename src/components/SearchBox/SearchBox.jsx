import React, { useState } from 'react';
import { PiUsersThreeLight } from 'react-icons/pi';
import { FaCalendarDays } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { GiGolfFlag } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import style from './SearchBox.module.css';

const options = {
  number: Array.from({ length: 10 }, (_, i) => ({ label: i + 1, value: i + 1 })),
  tourPublic: [
    { label: "City Tour", value: "city" },
    { label: "Historical Sites", value: "historical" },
    { label: "Nature Tour", value: "nature" },
    { label: "Adventure Tour", value: "adventure" },
  ],
  tourPrivate: [
    { label: "VIP City Tour", value: "vip-city" },
    { label: " Historical Sites", value: "exclusive-historical" },
    { label: "Luxury Nature Tour", value: "luxury-nature" },
    { label: "Private Adventure Tour", value: "private-adventure" },
  ],
  transportationPublic: [
    { label: "Car", value: "car" },
    { label: "Bus", value: "bus" },
    { label: "Bike", value: "bike" },
    { label: "Walking", value: "walking" },
  ],
  transportationPrivate: [
    { label: "Limousine", value: "limousine" },
    { label: "Private Bus", value: "private-bus" },
    { label: "Motorcycle", value: "motorcycle" },
    { label: "On Foot", value: "foot" },
  ],
};

const SearchBox = () => {
  const [selectedTourType, setSelectedTourType] = useState('public'); // حالة للتحكم بنوع الجولة
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTour, setSelectedTour] = useState('');
  const [selectedTransportation, setSelectedTransportation] = useState('');

  const renderTourOptions = selectedTourType === 'public' ? options.tourPublic : options.tourPrivate;
  const renderTransportationOptions = selectedTourType === 'public' ? options.transportationPublic : options.transportationPrivate;

  return (
    <div className={style.SearchBox}>
      <div>
        <button 
        className={`font-600-18 ${style.btnTours} ${style.btnTours_pub} ${selectedTourType === 'public' ? style.btnActive : ''}`}
          onClick={() => setSelectedTourType('public')}
        >
          <FaEarthAmericas /> Public Tours
        </button>
        <button 
          className={`font-600-18 ${style.btnTours} ${style.btnTours_pri} ${selectedTourType === 'private' ? style.btnActive : ''}`}
          onClick={() => setSelectedTourType('private')}
        >
          <PiUsersThreeLight /> Private Tours
        </button>
      </div>
      <div className={style.ulSearch}>
        <div className={style.Public}>
          <div >
            <p className={`font-600-18 ${style.tit}`}><PiUsersThreeLight /> Number of people</p>
            <select
              value={selectedNumber}
              onChange={(e) => setSelectedNumber(e.target.value)}
              className={`font-400-18 ${style.inputBox}`}
            >
              <option value=""  className={`font-400-18 `}>Choose number</option>
              {options.number.map((opt) => (
                <option key={opt.value} value={opt.value} className={`font-400-18 `}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className={style.itemTours}>
            <p className={`font-600-18 ${style.tit}`}><FaCalendarDays /> Date</p>
            <div className={style.date_picker_container}>
              <div className={style.date_picker_wrapper}>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`${style.styled_date_picker} ${style.inputBox} font-400-18 ${selectedDate ? '' : style.placeholder_style}`}
                />
                <IoIosArrowDown className={style.custom_calendar_icon} />
                {!selectedDate && <span className={`font-400-18 ${style.placeholder_text}`}>Choose Date</span>}
              </div>
            </div>
          </div>

          <div className={style.itemTours}>
            <p className={`font-600-18 ${style.tit}`}><IoTimeOutline /> Time</p>
            <div className={style.date_picker_container}>
              <div className={style.date_picker_wrapper}>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`${style.styled_date_picker} ${style.inputBox} font-400-18 ${selectedTime ? '' : style.placeholder_style}`}
                />
                <IoIosArrowDown className={style.custom_calendar_icon} />
                {!selectedTime && <span className={`font-400-18 ${style.placeholder_text}`}>Choose Time</span>}
              </div>
            </div>
          </div>

          <div className={style.itemTours}>
            <p className={`font-600-18 ${style.tit}`}><GiGolfFlag /> Tour</p>
            <select
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className={`font-400-18 ${style.inputBox}`}
            >
              <option value="">Select Tour</option>
              {renderTourOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className={style.itemTours}>
            <p className={`font-600-18 ${style.tit}`}><FaCar /> Transportation</p>
            <select
              value={selectedTransportation}
              onChange={(e) => setSelectedTransportation(e.target.value)}
              className={`font-400-18 ${style.inputBox}`}
            >
              <option value="">Select Transportation</option>
              {renderTransportationOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className={style.search_btn}><CiSearch /></button>
      </div>
    </div>
  );
};

export default SearchBox;

