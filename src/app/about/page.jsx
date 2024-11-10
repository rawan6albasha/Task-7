"use client";
import React from 'react';
import CustomersCard from "@/components/CustomersCard/CustomersCard";
import Pagination from '@/components/Pagination/Pagination';
import BeastComp from '@/components/BeastComp/BeastComp';
import aboutImg from '@/assets/images/Rectangle 22.png';
import AboutHero from '@/components/AboutHero/AboutHero';
import style from './page.module.css'
import Experts from '@/components/Experts/Experts';

const  Customers=[
  {id:1,
    tit:"Lyod Gomez",
    text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
  },
  {id:2,
    tit:"Lyod Gomez",
    text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
  },
  {id:3,
    tit:"Lyod Gomez",
    text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
  },
  {id:4,
    tit:"Lyod Gomez",
    text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
  }
]

const beastData = {
  img: aboutImg,
  tit: "We Are The Center Of Lucca To Offer You The Best",
  text: "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
};

const AboutPage = () => {
  return (
    <div>
    <AboutHero/>
      <BeastComp dataComp={beastData} />
      <Experts/>
      <Pagination
        cardNumber={2}
        title="Happy Customers Says"
        cardData={Customers}
        CardComponent={CustomersCard}
      />
    </div>
  );
};

export default AboutPage;
