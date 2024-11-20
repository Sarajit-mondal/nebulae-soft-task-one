import Image from "next/image";
import Link from "next/link";
import React from "react";

function OurWorks() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 my-20 md:mt-48">
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
        <div className="md:absolute text-white top-1/2 left-40  -translate-y-1/2 w-full md:w-1/2 md:h-[80%] z-30">
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
        <div className="md:absolute text-white -top-20 right-20 w-full md:w-2/3 md:h-[70%] z-20">
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
        <div className="md:absolute text-white top-30 right-52   w-full md:w-60 md:h-72 z-30">
          <div
            className="w-full h-full relative"
            style={{
              backgroundImage:
                "linear-gradient(to left, #8b2f4eCC, #8b2f4eCC), url('https://plus.unsplash.com/premium_photo-1661371736790-de30674f9e46?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* website link */}
            <div className="md:absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2   text-right ">
              <Link
                href="https://lsin.panasonic.com/"
                target="_blank"
                className="text-yellow-500 text-[12px] "
              >
                <span className="text-3xl font-bold text-white">A</span>{" "}
                <span className="text-lg text-white">AXIS BANK</span>
              </Link>
            </div>
          </div>
        </div>
        {/* work Card four  */}
        <div className="md:absolute text-white top-2/3 right-0  -translate-y-1/2 w-full md:w-60 md:h-80 z-30">
          <div
            className="w-full h-full relative">
           <Image
              layout="fill"
              objectFit="center"
              src="https://acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-apml.jpg"
              alt="Corporate Website banner"
            />
            {/* website link */}
            <div className="md:absolute left-5 bottom-5 ">
            <h3 className="text-lg text-black">Corporate Website</h3>
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
        {/* work Card five  */}
        <div className="md:absolute text-white top-3/4 right-72  -translate-y-1/2 w-full md:w-56 md:h-64 z-30">
          <div
            className="w-full h-full relative">
        
            <Link
                href="https://lsin.panasonic.com/"
                target="_blank"
                
              >
              <div className="relative w-64 h-64 group">
  {/* Static Image */}
  <img
    src="https://acodez.in/wp-content/themes/acodez-theme/images/works/panasonic.jpg"
    alt="Static Image"
    className="w-full h-full object-cover group-hover:hidden"
  />

  {/* GIF Image */}
  <img
    src="https://acodez.in/wp-content/themes/acodez-theme/images/works/anchor-gif-3.gif"
    alt="GIF Animation"
    className="w-full h-full object-cover hidden group-hover:block"
  />
</div>

               
              </Link>
          </div>
        </div>
         {/* work Card six  */}
         <div className="md:absolute text-white top-3/4 left-96  -translate-y-1/2 w-full md:w-44 md:h-56 z-30">
         <Link href="https://lsin.panasonic.com/"
                target="_blank"
                className="text-red-500 text-[12px]"> 
           <div
            className="w-full h-full relative">
           <Image
              layout="fill"
              objectFit="center"
              src="https://acodez.in/wp-content/themes/acodez-theme/images/works/webdesign-90plus.png"
              alt="Corporate Website banner"
            />
           
          </div>

          </Link>
        </div>
      </section>
    </div>
  );
}

export default OurWorks;
