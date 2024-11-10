'use client'
import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../assets/images/logo-(1).png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // دالة للتعامل مع التمرير وتحديث حالة الشريط
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200); // إذا كان التمرير أكبر من 50 بيكسل، يتم إضافة الفئة
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // مصفوفة تحتوي على اسم الصفحة والمسار الخاص بها
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Tour Packages", path: "/tour-packages" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
    <div className={`container ${style.navbar} ${scrolled ? style.scrolled : ''}`}>
      <Image src={logo} alt="Logo" />
      <div className={style.toggleBody}>
        <ul className={style.navUl}>
          {pages.map((page, index) => (
            <li key={index}>
              <Link href={page.path} className='font-600-20'>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.navDetl}>
          <select className={`font-600-20 ${style.selectNav}`}>
            <option className="font-600-20" value="home">Eng</option>
            <option className="font-600-20" value="about">Arb</option>
          </select>
          <button className={`font-600-20 ${style.login_btn}`}>Login</button>
          <button className={`font-600-20 ${style.logup_btn}`}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
