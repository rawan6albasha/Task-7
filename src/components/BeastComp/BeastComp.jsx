import React from 'react'
import style from './BeastComp.module.css'
import Image from 'next/image';
// import img1 from './../../assets/images/aboutpicture.png'
const BeastComp = ({dataComp}) => {
   const items=[{h:"20+",p:"Years Experience"},{h:"100+",p:"Happy Customer"},{h:"15+",p:"Choice  ofServices"},{h:"10+",p:"Professional Guides"},]
    return (
        <div className={`container ${style.BeastComp}`}>
            <Image src={dataComp.img} alt='girl' />
            <div className={style.BeastBody}>
<div className={style.Beasthead}>
<p className={`${style.sit_p} font-600-16`}>WELCOME TO OUR SITE!</p>
<h2 className={`font-800-32`}>{dataComp.tit}</h2>
</div>
                <p className={`font-400-18 dark-gray`}>{dataComp.text}</p>
                    <div className={style.items}>
                    {
    items.map((item, index) => (
        <div key={index} className={style.item}>
            <h3 className={`font-700-32 orange`}>{item.h}</h3>
            <p className={`font-400-16 dark-gray`}>{item.p}</p>
        </div>
    ))
}

                    </div>
            </div>
        </div>
    )
}


export default BeastComp
