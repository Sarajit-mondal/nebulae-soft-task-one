import Slider from "./Slider";

function Blog() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 ">
      <section
        className="flex flex-col lg:flex-row gap-2 justify-between 
       min:h-screen"
      >
        {/* left site slidder */}
        <div className="w-full  lg:w-1/2 ">
          <h2 className="text-2xl md:text-3xl ">Welcome to Acodez blog!</h2>
          <span className="inline-block w-20 h-1 bg-blue-500"></span>
          <p className="text-xl my-10">
            Explore the latest trends and find our updates on all you need to
            know about what is happening in the world of web and technology.
          </p>
          {/* blog slider */}
          <Slider />

          <button className="relative overflow-hidden  w-36 h-10 text-blue-500 px-4 py-2 rounded-full border-2 border-blue-500 group hover:text-white">
            {/* Text Layer */}
            <span className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap  transition-colors duration-700 ease-in-out">
              Quick Enquiry
            </span>

            {/* Hover Effect Layer */}
            <span className="absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40   border-blue-500   p-0 group-hover:border-[100px] transition-all duration-1000 "></span>
          </button>
        </div>
        {/* right site */}
        <div
          className="hidden lg:block relative w-[1000px] h-0 border-l-[600px] border-l-transparent border-r-transparent 
        border-t-[1000px]
        border-blue-500"
        ></div>
      </section>
    </div>
  );
}

export default Blog;
