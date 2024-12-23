import Image from "next/image";
import React from "react";

function Awards() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 mt-20 ">
      <section className="flex min-h-screen flex-col md:flex-row items-center justify-between gap-10">
        {/* left side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl ">We 've Won...</h2>
          <span className="inline-block w-20 h-1 bg-blue-500"></span>
          <div>
            <p className="mt-5">
              Multiple international awards, every year, since 2012! Apart from
              the 16 international awards that we've won, we're also a Google
              Certified Partner and Bing Ads Accredited Professional Company.
              We've also been featured and mentioned in many leading tech
              magazines and portals for our various contributions.
            </p>

            <button className="relative overflow-hidden  w-36 h-10 text-blue-500 px-4 py-2 rounded-full border-2 mt-10 border-blue-500 group hover:text-white">
              {/* Text Layer */}
              <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap  transition-colors duration-700 ease-in-out">
                View more
              </span>

              {/* Hover Effect Layer */}
              <span className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40   border-blue-500   p-0 group-hover:border-[100px] transition-all duration-1000 "></span>
            </button>
          </div>
          {/* awards gif file */}
          <div className="relative w-full h-[300px]">
            {" "}
            {/* Fixed height for the container */}
            <Image
              src="https://acodez.in/wp-content/themes/acodez-theme/images/wed-design-sliders/awards-gif.gif"
              alt="awards animation"
              layout="fill"
              objectFit="center"
            />
          </div>
        </div>
        {/* right side */}
        <div className="w-full block md:w-1/2  md:relative">
          {/* awards */}
          <div className="inline-block md:absolute  w-full shadow-md md:w-2/3 md:h-[500px] lg:h-96 bg-white p-6 md:top-2/4 left-10 md:-translate-y-2/4 ">
            <h3 className="text-xl ">16 Awards</h3>

            {/* Awards One */}
            <div className="flex gap-12 items-center mt-5">
              <Image
                width={60}
                height={60}
                src="https://i.ibb.co.com/BL50phf/award-symbol.png"
                alt="awards one image"
              />
              <div>
                <h4 className="text-lg">Global Trends</h4>
                <p>Triumph Winner</p>
                <p>2018,USA</p>
              </div>
            </div>
            {/* Awards Two */}
            <div className="flex gap-12 items-center mt-5">
              <Image
                width={60}
                height={60}
                src="https://i.ibb.co.com/BL50phf/award-symbol.png"
                alt="awards one image"
              />
              <div>
                <h4 className="text-lg">DotComm Awards</h4>
                <p>Platinum</p>
                <p>2017,USA</p>
              </div>
            </div>
            {/* Awards There */}
            <div className="flex gap-12 items-center mt-5">
              <Image
                width={60}
                height={60}
                src="https://i.ibb.co.com/BL50phf/award-symbol.png"
                alt="awards one image"
              />
              <div>
                <h4 className="text-lg">Muse Awards</h4>
                <p>Gold Winner</p>
                <p>2017,USA</p>
              </div>
            </div>
          </div>

          {/* awards company list */}
          <div
            className="h-96 mt-5 md:h-screen w-full "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505085702750-96d89f461398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXdhcmRzJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* all company */}
            <div
              data-aos="fade-left"
              className="flex flex-wrap h-full items-center justify-center gap-5"
            >
              {companiesLogo.map((company, inx) => (
                <div
                  key={inx}
                  className={`p-5 rounded-full  shadow-md bg-white hover:scale-110 duration-300 cursor-pointer  md:absolute hover:shadow-lg flex justify-center items-center
        ${
          inx === 0
            ? "md:top-12 md:right-24 md:size-30 "
            : inx === 1
            ? "md:top-40 md:right-2 "
            : inx === 2
            ? "md:top-52 md:right-28 "
            : inx === 3
            ? "md:top-72 md:right-10 md:size-16"
            : inx === 4
            ? "md:top-[345px] md:right-20 md:size-20"
            : "md:top-[430px] md:right-20 md:size-36"
        }
      `}
                >
                  <Image
                    height={65}
                    width={65}
                    alt="company logo"
                    src={company}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;

const companiesLogo = [
  "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  "https://cdn-icons-png.flaticon.com/128/731/731985.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968841.png",
  "https://cdn-icons-png.flaticon.com/128/17512/17512129.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968374.png",
  "https://cdn-icons-png.flaticon.com/128/17512/17512129.png",
];
