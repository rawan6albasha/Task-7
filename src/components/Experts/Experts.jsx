import React from 'react';
import style from './Experts.module.css';
import Image from 'next/image';
import img1 from './../../assets/images/icon_map.png';
import img2 from './../../assets/images/icon_guide.png';
import img3 from './../../assets/images/icon_experience.png';
import img4 from './../../assets/images/icon_best price.png';

const Experts = () => {
    const data = [
        { icon: img1, text: 'Complete Packages For All Your Wishes' },
        { icon: img2, text: 'Over 30 Years Of Experience' },
        { icon: img3, text: 'Expert Guides For You' },
        { icon: img4, text: 'Guaranteed fun at the best price!' },
    ];

    return (
        <div className={`${style.experts}`}>
        <div className={`container ${style.expertItems}  `}>
            {data.map((item, index) => (
                <div key={index} className={style.expertItem}>
                    <Image src={item.icon} alt="Expert Icon" />
                    <p className={`font-600-20`}>{item.text}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Experts;
