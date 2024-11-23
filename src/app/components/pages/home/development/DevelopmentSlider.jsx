import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const TabbedSlider = () => {
  const [activeTab, setActiveTab] = useState("Web Application");

  const tabs = ["Web Application", "Mobile App", "CMS Websites", "E Commerce Websites"];

  const data = {
    "Web Application": [
      {
        image: "https://via.placeholder.com/300x200?text=Web+App+1",
        description: "Web Application project 1",
      },
      {
        image: "https://via.placeholder.com/300x200?text=Web+App+2",
        description: "Web Application project 2",
      },
    ],
    "Mobile App": [
      {
        image: "https://via.placeholder.com/300x200?text=Mobile+App+1",
        description: "Mobile App project 1",
      },
      {
        image: "https://via.placeholder.com/300x200?text=Mobile+App+2",
        description: "Mobile App project 2",
      },
    ],
    "CMS Websites": [
      {
        image: "https://via.placeholder.com/300x200?text=CMS+1",
        description: "CMS Website project 1",
      },
      {
        image: "https://via.placeholder.com/300x200?text=CMS+2",
        description: "CMS Website project 2",
      },
    ],
    "E Commerce Websites": [
      {
        image: "https://via.placeholder.com/300x200?text=E+Commerce+1",
        description: "E Commerce Website project 1",
      },
      {
        image: "https://via.placeholder.com/300x200?text=E+Commerce+2",
        description: "E Commerce Website project 2",
      },
    ],
  };

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className="flex justify-left space-x-10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-3 border-b-2  ${
              activeTab === tab
                ? "border-blue-500":"border-transparent"

            } transition-all duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="w-full"
      >
        {data[activeTab].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md">
              <Image
                src={item.image}
                alt={item.description}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-center mt-4">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabbedSlider;
