import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
   
        modules={[Autoplay]}
        className="mySwiper w-2/4 mt-40"
      >
       
        {
            services && services.map((service,inx) => <SwiperSlide key={inx}><p className='text-4xl md:text-6xl text-center'>{service}</p></SwiperSlide>)
        }
      </Swiper>
    </>
  );
}


// our service array
const services = [
    "Web Development with Certification",
    "UI/UX Design with Full Support",
    "App Development with Ongoing Maintenance",
    "E-commerce Solutions with Payment Gateway Integration",
    "SEO Optimization with Analytics Reporting",
    "Digital Marketing Campaigns with ROI Tracking",
    "Custom Software Development with 24/7 Support",
    "Cloud Integration with Data Security",
    "API Development with Documentation",
    "Technical Support with Troubleshooting",
    "Branding & Identity Design with Strategy Consulting",
    "Content Management Systems (CMS) with User Training",
    "Social Media Management with Monthly Reports",
    "Performance Optimization with Speed Audits",
    "Data Analytics & Reporting with Custom Dashboards",
    "Cybersecurity Solutions with Risk Assessment",
    "Hosting & Maintenance Services with Automatic Backups",
    "AR/VR Development with Interactive Prototypes",
    "Blockchain Solutions with Smart Contract Development",
    "IT Consulting with Business Analysis",
    "Web Development Courses with Certification",
  ];
  