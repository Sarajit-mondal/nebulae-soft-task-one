import Image from "next/image";
import Link from "next/link";
import React from "react";

function OurWorks() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 my-20 md:mt-36">
      <section className="min-h-screen md:relative">
        <h2 className="text-2xl md:text-3xl ">Our Works</h2>
        <span className="inline-block w-20 h-1 bg-blue-500"></span>
        {/* Obsessed with Quality card */}
        <div className="md:absolute bg-blue-500 text-white p-8 md:w-96 top-1/2 -translate-y-1/2 z-40">
          <h2 className="text-2xl">Obsessed with Quality!</h2>
          <p>
            Yes, at Acodez, we're obsessed with quality. We rely on our
            portfolio to do business and always ensure that each of our web or
            mobile deliverable is unique and world class.
          </p>
        </div>
        {/* work Card One */}
        <div className="md:absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 md:h-[60%] z-30">
          <div className="w-full h-full relative">
            <Image
              layout="fill"
              objectFit="center"
              src="https://acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-anchor.jpg"
              alt="Corporate Website banner"
            />

            {/* website link */}
            <div className="md:absolute bottom-5 left-10 z-50 text-black">
              <h3 className="text-xl">Corporate Website</h3>
              <Link
                href="https://lsin.panasonic.com/"
                target="_blank"
                className="text-red-500 text-[12px]"
              >
                VIEW WEBSITE
              </Link>
            </div>
          </div>
        </div>
        {/* work Card Two */}
        <div className="md:absolute text-white top-0 right-0 w-full md:w-1/2 md:h-[60%] z-20">
          <div className="w-full h-full relative">
            <Image
              layout="fill"
              objectFit="center"
              src="https://acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-kalayci-london.jpg"
              alt="Corporate Website banner"
            />

            {/* website link */}
            <div className="md:absolute top-5 right-10 z-50 text-white text-right">
              <h3 className="text-xl">E-Commerce</h3>
              <Link
                href="https://lsin.panasonic.com/"
                target="_blank"
                className="text-yellow-500 text-[12px]"
              >
                VIEW WEBSITE
              </Link>
            </div>
          </div>
        </div>
        {/* work Card There Bank */}
        <div className="md:absolute text-white top-1/2 right-20  -translate-y-1/2 w-full md:w-60 md:h-72 z-30">
          <div
            className="w-full h-full relative"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8)), url('https://plus.unsplash.com/premium_photo-1661371736790-de30674f9e46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* website link */}
            <div className="md:absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-white text-right">
              <Link
                href="https://lsin.panasonic.com/"
                target="_blank"
                className="text-yellow-500 text-[12px]"
              >
                <span className="text-2xl font-bold">A</span>{" "}
                <span>AXIS BANK</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurWorks;
