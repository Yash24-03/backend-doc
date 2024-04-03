import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Available Doctors" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img='https://www.woodlandshospital.in/images/doctor-img/Soutik-Panda-New1.jpg'
            productName="Dr. Arjun Reddy"
            price="9***"
            color="Endocrinologist"
            badge={false}
            des="Like other internal medicine physicians, endocrinologists attend medical school followed by an internal medicine residency."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img='https://shardahospital.org/uploads/doctor/doc_dr-ashok-kumar-aggarwal3.jpg'
            productName="Dr. Salman Khan"
            price="9***"
            color="Gastroenterology"
            badge={false}
            des="Gastroenterology is the branch of medicine focused on the digestive system and its disorders."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4ZM99Hk-wA9Qoj4UhuKFsJ-uS50s4cy8OEgP4Cly1Dn_mN0neyxfaOsgM8QqiUc2aU0&usqp=CAU'
            productName="Dr. Shatrugan"
            price="9***"
            color="Dermatology"
            badge={false}
            des="Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img='https://www.medclean.com/wp-content/uploads/2018/03/doctor-in-white-coat-blog.jpg'
            productName="Dr. Shahrukh Khan"
            price="9***"
            color="Rheumatologists "
            badge={false}
            des="They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img='https://www.yashodahealthcare.com/uploadedfiles/gallery/1635164706_Dr.-Ajay-Malik.jpg'
            productName="Dr. Vidyut Jamval"
            price="9***"
            color="Radiologists "
            badge={false}
            des="They use X-rays, ultrasound, and other imaging tests to diagnose diseases."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
