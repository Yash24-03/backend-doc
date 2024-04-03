import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

function SpecialOffers() {
  const [doctors, setDoctors] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const DoctorCard = ({ doctor }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
      >
        <img className="w-full h-40 object-cover object-center" src={doctor.profilePhoto} alt={doctor.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{`Dr. ${doctor.firstName}`}</div>
          <p className="text-gray-700 text-base">{doctor.specialization}</p>
        </div>
      </div>
    );
  };

  return (
    <Row gutter={20}>
      {doctors.map((doctor) => (
        <Col key={doctor.id} span={8} xs={24} sm={24} lg={8}>
          <DoctorCard doctor={doctor} />
        </Col>
      ))}
    </Row>
  );
}

export default SpecialOffers;
