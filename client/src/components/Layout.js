import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../assets/images";
import Image from "./designLayouts/Image";
import Flex from "./designLayouts/Flex";
import { motion } from "framer-motion";


const Layout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false); // For managing the collapsible behavior
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
  ];

  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line",
    },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      {/* Header/Navigational Section */}
      <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <nav className="h-full px-4 max-w-container mx-auto relative">
          <Flex className="flex items-center justify-between h-full">
            <Link to="/">
              <div>
                <Image className="w-20 object-cover" imgSrc={logo} />
              </div>
            </Link>
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-50 p-0 gap-2"
            >
              {menuToBeRendered.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className={`flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 ${
                    location.pathname === menu.path ? "text-blue-500" : ""
                  }`}
                >
                  {menu.name}
                </Link>
                
              ))}
            </motion.ul>
          </Flex>
        </nav>
      </div>

      {/* Render the children components */}
      <div >{children}</div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0 text-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Layout;
