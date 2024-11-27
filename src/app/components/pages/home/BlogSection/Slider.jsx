import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const Slider = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const companyLogo = [
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image-NEW_01-copy-3-zzqp38uobvlmqq6q1rti4g.jpg",
      altText: "Nick Zviadadze – Founder of MintSEO",
      postDate: "Nov 20, 2024",
      category: {
        name: "Interview Series",
        link: "https://acodez.in/category/interview-series/",
      },
      title: "Acodie Interview Series: Nick Zviadadze – Founder of MintSEO",
      link: "https://acodez.in/interview-series-nick-zviadadze/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_01-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Barry Schwartz, Founder of Search Engine Roundtable",
      postDate: "Nov 12, 2024",
      category: {
        name: "Interview Series",
        link: "https://acodez.in/category/interview-series/",
      },
      title: "Acodie Interview Series: Barry Schwartz",
      link: "https://acodez.in/interview-series-barry-schwartz/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_02-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "John Smith, Co-Founder of Tech Innovations",
      postDate: "Nov 5, 2024",
      category: {
        name: "Tech Innovations",
        link: "https://acodez.in/category/tech-innovations/",
      },
      title: "John Smith – Co-Founder of Tech Innovations",
      link: "https://acodez.in/interview-series-john-smith/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_03-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Sarah Lee, Head of Digital Marketing",
      postDate: "Oct 28, 2024",
      category: {
        name: "Digital Marketing",
        link: "https://acodez.in/category/digital-marketing/",
      },
      title: "Sarah Lee – Head of Digital Marketing at Digital World",
      link: "https://acodez.in/interview-series-sarah-lee/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_04-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Mason Tran, CEO of Startup Hub",
      postDate: "Oct 22, 2024",
      category: {
        name: "Startup Hub",
        link: "https://acodez.in/category/startup-hub/",
      },
      title: "Mason Tran – CEO of Startup Hub",
      link: "https://acodez.in/interview-series-mason-tran/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_05-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Emily Davis, CTO at Future Tech Solutions",
      postDate: "Oct 15, 2024",
      category: {
        name: "Tech Solutions",
        link: "https://acodez.in/category/tech-solutions/",
      },
      title: "Emily Davis – CTO at Future Tech Solutions",
      link: "https://acodez.in/interview-series-emily-davis/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_06-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Alex Moore, Innovator in AI Development",
      postDate: "Oct 10, 2024",
      category: {
        name: "AI Development",
        link: "https://acodez.in/category/ai-development/",
      },
      title: "Alex Moore – Innovator in AI Development",
      link: "https://acodez.in/interview-series-alex-moore/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_07-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Jessica Lin, Blockchain Pioneer",
      postDate: "Sep 30, 2024",
      category: {
        name: "Blockchain",
        link: "https://acodez.in/category/blockchain/",
      },
      title: "Jessica Lin – Blockchain Pioneer",
      link: "https://acodez.in/interview-series-jessica-lin/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_08-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Kevin Park, Data Scientist",
      postDate: "Sep 22, 2024",
      category: {
        name: "Data Science",
        link: "https://acodez.in/category/data-science/",
      },
      title: "Kevin Park – Insights on Modern Data Science",
      link: "https://acodez.in/interview-series-kevin-park/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_09-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Rachel Green, Cloud Computing Expert",
      postDate: "Sep 15, 2024",
      category: {
        name: "Cloud Computing",
        link: "https://acodez.in/category/cloud-computing/",
      },
      title: "Rachel Green – Cloud Computing Trends in 2024",
      link: "https://acodez.in/interview-series-rachel-green/",
    },
    {
      imgSrc:
        "https://acodez.in/wp-content/uploads/bfi_thumb/Feature-image_10-zz84j5u4d0c20sdgclq4u8.jpg",
      altText: "Tom Cruise, CEO of InnovateX",
      postDate: "Sep 1, 2024",
      category: {
        name: "Innovations",
        link: "https://acodez.in/category/innovations/",
      },
      title: "Tom Cruise – The Future of InnovateX",
      link: "https://acodez.in/interview-series-tom-cruise/",
    },
  ];

  return (
    <div className="relative md:max-h-screen">
      <Swiper
        slidesPerView={1}
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
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="my-10"
      >
        {companyLogo.length > 0 &&
          companyLogo.map((link, index) => (
            <SwiperSlide key={index}>
              <div className="group relative w-full  flex flex-col md:flex-row gap-10">
                <Image
                  className="cursor-pointer transition-opacity duration-300"
                  height={300}
                  width={500}
                  src={link.imgSrc}
                  alt="company logo"
                />
                <div>
                  <p>
                    <span>{link.postDate}</span>
                    <span className="text-blue-500">{link.category.name}</span>
                  </p>
                  <h3 className="text-xl">{link.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button
        ref={prevButtonRef}
        className="absolute right-14 -bottom-10 z-10  text-gray-600 px-4 py-2 rounded text-xl"
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextButtonRef}
        className="absolute right-5 -bottom-10 z-10  text-gray-600 px-4 py-2 rounded text-xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
