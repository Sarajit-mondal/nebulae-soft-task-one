import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const TabbedSlider = () => {
  const [activeTab, setActiveTab] = useState("Web Application");
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const tabs = [
    "Web Application",
    "Mobile App",
    "CMS Websites",
    "E Commerce Websites",
  ];

  return (
    <div className="mt-10 relative">
      {/* Tabs */}
      <div className="flex justify-left space-x-10 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-3 border-b-2  ${
              activeTab === tab ? "border-blue-500" : "border-transparent"
            } transition-all duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="w-full"
      >
        {data[activeTab].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md relative overflow-hidden">
              {/* Image */}
              <Image
                src={item.src}
                alt={item.description}
                width={300}
                height={200}
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Description */}
              <p className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 bg-blue-500 text-white p-4 rounded-lg transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevButtonRef}
        className="absolute left-5 -bottom-12 z-50 text-gray-600 px-6 py-3  text-xl transition-all duration-300"
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextButtonRef}
        className="absolute left-14 -bottom-12 z-50 text-gray-600 px-6 py-3  text-xl transition-all duration-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default TabbedSlider;

const data = {
  "Web Application": [
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/elegantreport.jpg",
      description:
        "A MERN Stack development project for SaaS Product with a monthly subscription model.",
      href: "http://elegantreports.com/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/lemo.jpg",
      description:
        "Web portal in PHP, Laravel framework, and Angular JS for a company in Afghanistan.",
      href: "https://lemoonline.com/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/realestate.jpg",
      description:
        "A real estate web portal in PHP, Laravel framework for a company in Norway.",
      href: "http://realestate.acodez.ca/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Web-Applications/trueparking.jpg",
      description:
        "A MEAN Stack Web Application for a Parking company in the US.",
      href: "http://trueparkings.acodez.ca/",
    },
  ],
  "Mobile App": [
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/Hermespay.jpg",
      href: "http://trueparkings.acodez.ca/",
      description:
        "A mobile wallet App in Android and iOS for a client in Nigeria, with online and offline payment processing and encryption.",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/Mytutuion.jpg",
      href: "http://trueparkings.acodez.ca/",
      description:
        "A hybrid mobile app in React Native for a virtual learning company. Enabled with high-end encryption of videos.",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/story.jpg",
      href: "http://trueparkings.acodez.ca/",
      description:
        "A fully custom illustrated motivational story app in Android Native.",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/virtual-village.jpg",
      href: "http://trueparkings.acodez.ca/",
      description:
        "A hybrid mobile app in Ionic for Android and iOS for a CAD drawing creation consultant in US.",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/Mobile-Apps/ARC.jpg",
      href: "http://trueparkings.acodez.ca/",
      description:
        "A Ionic framework mobile app in Android for online test preparation for competitive exams.",
    },
  ],
  "CMS Websites": [
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/brannan.jpg",
      description: "Corporate web for a leading market research company.",
      href: "http://iresearch.acodez.ca/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/zilair.jpg",
      description:
        "A Corporate website in WordPress for a leading luxury helicopter service in Seychelles.",
      href: "http://zilair.acodez.ca/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/maz_conzultans.jpg",
      description: "WordPress custom website for a leading architect in UAE.",
      href: "http://mazconsultants.com/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/marquise.jpg",
      description:
        "A custom web design and development for a food company in Singapore.",
      href: "http://marquise.acodez.ca/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/brannan.jpg",
      description: "A news portal for a leading news group in Nepal.",
      href: "https://www.barnanmedia.com/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/cleverprep.jpg",
      description:
        "A website for competitive exam test learning & preparation.",
      href: "https://cleverprep.acodez.ca/",
    },
    {
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/CMS/greymatters.jpg",
      description:
        "Corporate website for a leading investment fund based in the US.",
      href: "http://graymatter.hereisthedemo.com/",
    },
  ],
  "E Commerce Websites": [
    {
      url: "http://cutlecrap.acodez.ca/",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/clp.jpg",
      description:
        "An unconventional ecommerce website with an interactive parallax design.",
      buttonText: "View Work",
    },
    {
      url: "http://kitnkaboodle.acodez.ca/",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Kit-and-Kabool.jpg",
      description: "A custom-built Magento 2.0 ecommerce website.",
      buttonText: "View Work",
    },
    {
      url: "",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Lavivo.jpg",
      description: "A custom ecommerce website in WooCommerce.",
      buttonText: "View Work",
    },
    {
      url: "https://rhitrition.com/",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Rhitrition.jpg",
      description:
        "A custom-developed ecommerce website in WooCommerce for a leading private nutrition clinic in the UK.",
      buttonText: "View Work",
    },
    {
      url: "https://www.autoswithattitude.com/",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/awm.jpg",
      description:
        "An award-winning ecommerce website with a funky and interactive design.",
      buttonText: "View Work",
    },
    {
      url: "http://chymey.acodez.ca/",
      src: "https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/E-commerce/Chymey.jpg",
      description:
        "A custom designed and developed ecommerce website in WooCommerce.",
      buttonText: "View Work",
    },
  ],
};
