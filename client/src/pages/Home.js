import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import Banner from "../components/Banner/Banner"
import BannerBottom from "../components/Banner/BannerBottom"
import Header from "../components/header";
import Sale from "../components/home/Sale/Sale"
import  Footer  from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom"

import SpecialOffers from "../components/home/SpecialOffers/SpecialOffers";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
      <Layout>
        <div className="w-full mx-auto">
          {/* Your other content */}
          <Header />
          <Banner />
          {/* More content or components */}
          <BannerBottom />
          <div className="max-w-container mx-auto px-4">
          <SpecialOffers />
          <Sale/>
          <Footer/>
          <FooterBottom/>


          </div>
        </div>
      </Layout>
  );
}

export default Home;
