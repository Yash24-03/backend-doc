import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
// import { hideLoading, showLoading } from "../redux/alertsSlice";
import { logoLight } from "../assets/images";
import { BsCheckCircleFill } from "react-icons/bs";

function Register() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const onFinish = async (values) => {
    try {
      // dispatch(showLoading());

      // Upload image to Cloudinary if an image is selected
      let imageUrl = null;
      if (image) {
        imageUrl = await uploadImage();
        if (!imageUrl) {
          throw new Error("Failed to upload image");
        }
      }

      const userData = { ...values, profilePhoto: imageUrl };

      const response = await axios.post("/api/user/register", userData);
      // dispatch(hideLoading());

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "mvw37hr8");

    try {
      // setUploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dfpmkus1i/image/upload",
        {
          method: "post",
          body: data,
        }
      );

      const urlData = await res.json();
      // setUploadingImg(false);
      return urlData.url;
    } catch (error) {
      // setUploadingImg(false);
      console.log(error);
      return null;
    }
  }

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
  
        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          const targetAspectRatio = 1; // Target aspect ratio (1:1 for square profile photo)
          const imgAspectRatio = img.width / img.height;
  
          let resizeWidth, resizeHeight, cropX, cropY;
  
          // If image aspect ratio is wider than 1:1
          if (imgAspectRatio > targetAspectRatio) {
            resizeWidth = img.height * targetAspectRatio;
            resizeHeight = img.height;
            cropX = (img.width - resizeWidth) / 2;
            cropY = 0;
          } else { // If image aspect ratio is taller than 1:1
            resizeWidth = img.width;
            resizeHeight = img.width / targetAspectRatio;
            cropX = 0;
            cropY = (img.height - resizeHeight) / 3; // Adjust cropping position to center vertically
          }
  
          // Set canvas dimensions to desired resize size
          canvas.width = resizeWidth;
          canvas.height = resizeHeight;
  
          // Draw image onto canvas with resize dimensions
          ctx.drawImage(img, cropX, cropY, resizeWidth, resizeHeight, 0, 0, resizeWidth, resizeHeight);
  
          // Convert canvas back to a resized and cropped image
          canvas.toBlob(function (blob) {
            const resizedAndCroppedFile = new File([blob], file.name, {
              type: "image/jpeg", // Change to appropriate image type if needed
            });
  
            setImage(resizedAndCroppedFile);
            setImagePreview(URL.createObjectURL(resizedAndCroppedFile));
          }, "image/jpeg"); // Change to appropriate image type if needed
        };
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  
  
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium text-white">
              Stay sign in for more
            </h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with DOT
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all DOT services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © DOT
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <Form
  name="registerForm"
  initialValues={{ remember: true }}
  onFinish={onFinish}
  className="w-full lgl:w-[450px] h-screen flex items-center justify-center"
>
  <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center">
    <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
      Register
    </h1>
    <div className="flex flex-col gap-3">
      {/* Profile Photo */}
      <div className="flex flex-col gap-.5">
        <p className="font-titleFont text-base font-semibold text-gray-600">
          Profile Photo
        </p>
        <Form.Item
          // label="Profile Photo"
          labelAlign="left"
          labelCol={{ span: 24 }}
        >
          <input type="file" onChange={validateImg} accept="image/*" />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 rounded-lg"
              style={{ maxWidth: "200px" }}
            />
          )}
        </Form.Item>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-.5">
        <p className="font-titleFont text-base font-semibold text-gray-600">
          Name
        </p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            placeholder="Your name"
          />
        </Form.Item>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-.5">
        <p className="font-titleFont text-base font-semibold text-gray-600">
          Work Email
        </p>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            placeholder="john@workemail.com"
          />
        </Form.Item>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-.5">
        <p className="font-titleFont text-base font-semibold text-gray-600">
          Password
        </p>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
          ]}
        >
          <Input.Password
            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
            placeholder="Create password"
          />
        </Form.Item>
      </div>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
        >
          Register
        </Button>
      </Form.Item>

      <p className="text-sm text-center font-titleFont font-medium">
        Already have an account?{" "}
        <Link to="/login">
          <span className="hover:text-blue-600 duration-300">Sign in</span>
        </Link>
      </p>
    </div>
  </div>
</Form>
    </div>
  );
}

export default Register;
