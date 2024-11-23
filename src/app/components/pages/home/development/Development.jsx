import DevelopmentSlider from "./DevelopmentSlider"


function Development() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 mt-20 py-20 bg-slate-300">
      <div className="max-w-xl space-y-5">
      <div>
      <h2 className="text-2xl md:text-3xl ">Web Development</h2>
      <span className="inline-block w-20 h-1 bg-blue-500"></span>
      </div>
      <p>
      We ensure that all our web development and mobile application development projects are not only engineered using the most cutting edge technologies, but also they're created through a human-centred design process.
      </p>
      </div>

     {/* Tab and slider */}
     <DevelopmentSlider />
    </div>
  )
}

export default Development
