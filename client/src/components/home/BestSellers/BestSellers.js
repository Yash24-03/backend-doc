import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Experts" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img='https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg='
          productName="Dr. Anil Kapoor"
          price="9***"
          color="Orthologist"
          badge={false}
          des="Orthopedic doctors are doctors who focus on caring for your bones, joints, ligaments, nerves, and tendons (the tissue that connects bones and joints)."
        />
        <Product
          _id="1012"
          img='https://txhospitals.in/wp-content/uploads/2023/10/Dr.-Dharma-Rakshak-Ayapati.webp'
          productName="Dr. Ajay Devgan"
          price="9***"
          color="pediatrician"
          badge={false}
          des="A pediatrician is involved in managing the physical, emotional and, behavioral, & mental health of their young patients."
        />
        <Product
          _id="1013"
          img='https://specialisthospital.in/wp-content/uploads/2023/05/NewDoctorsWebsite-Anitha.jpg'
          productName="Dr. Priyanka"
          price="9***"
          color="Cardiologist"
          badge={false}
          des=" They're experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular ..."
        />
        <Product
          _id="1014"
          img='https://poonawallafincorp.com/img/medical-equipment-loan-for-doctors-vp.jpg'
          productName="Dr. Ranbir Kapoor"
          price="9***"
          color="Surgeon"
          badge={false}
          des="In modern medicine, a surgeon is a medical doctor who performs surgery. Although there are different traditions in different times and places, a modern surgeon is also a licensed physician or received the same medical training as physicians before specializing in surgery."
        />
      </div>
    </div>
  );
};

export default BestSellers;
