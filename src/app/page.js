"use client";
import styles from "./page.module.css";
import HeroHome from "@/components/HeroHome/HeroHome";
import Pagination from "@/components/Pagination/Pagination";
import BeastComp from "@/components/BeastComp/BeastComp";
import OffersCompo from "@/components/OffersCompo/OffersCompo";
import CardsDisplay from "@/components/CardsDisplay/CardsDisplay";
import Card from "@/components/Card/Card";
import Bike from "@/components/Bike/Bike";
import Packag from "@/components/Packag/Packag";
import style from './../components/Pagination/Pagination.module.css';
import image1 from './../assets/images/Rectangle 16.png';
import image2 from './../assets/images/Rectangle 16 (1).png';
import image3 from './../assets/images/Rectangle 16 (2).png';
import image4 from './../assets/images/Rectangle 16 (3).png';
import aboutImg from './../assets/images/aboutpicture.png';
import CustomersCard from "@/components/CustomersCard/CustomersCard";

const firstPag = [
  { id: 1, image: image1, tit: 'Lucca Bike Tour', disc: 'A tour of the city and its surroundings led by a professional guide ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "EVERY DAY", pag_time: "3-10 PP" },
  { id: 2, image: image2, tit: 'Wine tasting In Tuscany', disc: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "MONDAY", pag_time: "10-30 PP" },
  { id: 3, image: image3, tit: 'Cinque Terre Tour', disc: 'Visiting the 5 Terre is a must, and you can never go there enough ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "TO BE DECIDED", pag_time: "10-50 PP" },
  { id: 4, image: image4, tit: 'Siena and Surroundings', disc: 'Visit the beautiful Siena and the cities that surround it to experience ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "TO BE DECIDED", pag_time: "5-10 PP" },
  { id: 5, image: image2, tit: 'Lucca Bike Tour', disc: 'A tour of the city and its surroundings led by a professional guide ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "EVERY DAY", pag_time: "10-30 PP" },
  { id: 6, image: image2, tit: 'Wine tasting In Tuscany', disc: 'Visit the beautiful Siena and the cities that surround it to experience ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "MONDAY", pag_time: "3-10 PP" },
  { id: 7, image: image4, tit: 'Cinque Terre Tour', disc: 'Visiting the 5 Terre is a must, and you can never go there enough ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "TO BE DECIDED", pag_time: "10-50 PP" },
  { id: 8, image: image3, tit: 'Siena and Surroundings', disc: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...', image_class: style.Destinantions_img, tit_class: 'font-700-24', disc_class: 'font-400-18', pag_date: "TO BE DECIDED", pag_time: "5-10 PP" },
];
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
const Beast={img:aboutImg,tit:"We are the best company for your visit",text:"After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"}
const Home = () => {
  return (
    <div>
      <HeroHome />
      <Pagination
        cardNumber={4}
        title="Explore Our Popular Destinantions"
        cardData={firstPag}
        CardComponent={Card}
        cardProps={{ pagination: true }}
      />
      <BeastComp dataComp={Beast} />
      <OffersCompo />
      <CardsDisplay />
      <Bike />
      <Packag />
      <Pagination
        cardNumber={2}
        title="Happy Customers Says"
        cardData={Customers}
        CardComponent={CustomersCard}
        
      />
    </div>
  );
};

export default Home;
