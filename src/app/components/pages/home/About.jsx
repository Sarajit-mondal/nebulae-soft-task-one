
function About() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 mt-20">
      <h2 className="text-2xl md:text-3xl ">About</h2>
      <span className="inline-block w-20 h-1 bg-blue-500"></span>
      <div className="md:flex items-center justify-between mt-10 md:space-x-10">
        {/* leftSide */}
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <p className="text-2xl leading-[60px]">
            We are an international award-winning IT company with 6 offices
            across India, and offers web design, web development and digital
            marketing services.
          </p>
        </div>
        {/* right side */}
        <div data-aos="fade-left" className="w-full md:w-1/2 text-xl ">
          <p>
            Acodez is rated as one of the top web agencies in India by various
            industry magazines and review sites. We have a right blend of
            award-winning designers, expert web developers and Google certified
            digital marketers which make us a unique one-stop solution for
            hundreds of our clients, spread across 80+ countries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
