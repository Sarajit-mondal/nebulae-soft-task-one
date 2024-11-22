"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillCode } from "react-icons/ai";

function Service() {
  const [isHovered, setIsHoverd] = useState(null);
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 lg:-mt-40">
      {/* Service container */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 items-center">
        {/* Card show */}
        {cardsData.map((column, colIndex) => (
          <div
            data-aos="fade-up"
            key={colIndex}
            className={`flex flex-col gap-5 ${colIndex === 1 && "lg:mt-72"}`}
          >
            {column.map((card) => (
              <div
                key={card.id}
                className={`p-6 h-[360px] shadow-sm 
              ${
                isHovered === card.id
                  ? "bg-blue-500 text-white transition-all duration-500 "
                  : "bg-white text-black"
              }`}
                onMouseEnter={() => setIsHoverd(card.id)}
                onMouseLeave={() => setIsHoverd(null)}
              >
                <Image
                  height={50}
                  width={50}
                  src={card.image}
                  alt={`${card.title} icon`}
                  className="transition-all"
                />
                <h3 className="text-lg font-medium my-3 transition-all duration-100">
                  {card.title}
                </h3>

                {/* Show after hover */}
                {isHovered && isHovered === card.id ? (
                  card.services &&
                  card.services.map((service, serviceIndex) => (
                    <div key={serviceIndex}>
                      {service.titles &&
                        service.titles.map((title, titleIndex) => (
                          <p
                            key={titleIndex}
                            className="text-nowrap text-[15px] transition-all duration-100"
                          >
                            {"> " + title}
                          </p>
                        ))}

                      {/* View Button */}
                      {service.button && (
                        <button className="py-1 px-5 rounded-full border-2 border-white hover:bg-white hover:text-blue-500 duration-100 ease-in-out mt-4">
                          {service.button}
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="transition-all duration-300">
                    {card.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Service;

// Card Array
const cardsData = [
  [
    {
      id: 1,
      title: "Software Development",
      description:
        "Our expert in-house team uses cutting edge technologies to build software and custom web applications that are stunning, robust, and scalable.",
      image: "https://i.ibb.co.com/GcbzBYx/software-development.png",

      services: [
        {
          titles: [
            "Web Application Development",
            "AI & ML - Python, TensorFlow",
            "MEAN/MERN Stack Development",
            "BlockChain Development",
            "IoT Applications",
            "Big Data Services",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Branding",
      description:
        "Our highly creative team of designers always excels in creating unique brand identity and out-of-the-box designs that speaks on its own!",
      image: "https://i.ibb.co.com/9r7JmVM/branding.png",
      services: [
        {
          titles: [
            "Logo & Brand Identity",
            "Graphic Design",
            "Package Design",
            "Infographics Design",
            "Print Design",
            "Creative Copy Writing",
          ],
          button: "view",
        },
      ],
    },
  ],
  [
    {
      id: 3,
      title: "UX Design",
      description:
        "Great online experiences happen only when a well planned UX strantegy is visualized with to class design aesthentics; and we do it best.",
      image: "https://i.ibb.co.com/m6c6cYP/web-design.png",
      services: [
        {
          titles: [
            "UX Research",
            "Information Architecture",
            "Mood Boards",
            "Wireframing",
            "Interaction Design",
            "UX Testing",
          ],
          button: "view",
        },
      ],
    },
    {
      id: 4,
      title: "Video Productions",
      description:
        "We create awesome explainer videos of all types, that'd improve your brand story telling & user engagement which results in higher conversions",
      image: "https://i.ibb.co.com/sw2Gyn3/video-marketing.png",
      services: [
        {
          titles: [
            "Explainer Videos",
            "2D Animated Videos",
            "3D Animated Videos",
            "Whiteboard Animation",
            "Motion Graphics",
          ],
        },
      ],
    },
  ],
  [
    {
      id: 5,
      title: "Mobile App",
      description:
        "Our profound knowledge of mobile technologies & frameworks, help us create secure & scalable Mobile Apps with great UX.",
      image: "https://i.ibb.co.com/7trZ3RY/booking.png",
      services: [
        {
          titles: [
            "Android App Development",
            "iOS App Development",
            "React Native Apps",
            "Ionic App Development",
            "Xamarin App Development",
            "Phone Gap Apps",
          ],
          button: "view",
        },
      ],
    },
    {
      id: 6,
      title: "Digital Marketing",
      description:
        "We're a google partner and we offer unique digital marketing solutions that'd load your inbox with inquiries.",
      image: "https://i.ibb.co.com/g9D09mV/social-media.png",
      services: [
        {
          titles: [
            "Inbound Marketing",
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Search Engine Marketing (SEM)",
            "Email Marketing",
            "Analytics Consultation",
          ],
          button: "view",
        },
      ],
    },
  ],
  [
    {
      id: 7,
      title: "We Development",
      description:
        "Technological expertise coupled with award-winning UX skills is what makes us the leading web development campany in india - and helps us build world class websites and web applications.",
      image: "https://i.ibb.co.com/5vdzrnw/app-development.png",
      services: [
        {
          titles: [
            "CMS Development",
            "Ecommerce Development",
            "Node JS Development",
            "Angular Development",
            "React JS Development",
          ],
          button: "view",
        },
      ],
    },
  ],
];
