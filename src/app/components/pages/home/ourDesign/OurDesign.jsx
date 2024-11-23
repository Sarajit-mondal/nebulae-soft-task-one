import React from 'react'
import DesignSlider from './DesignSlider'

function OurDesign() {
  return (
    <div className='max-w-[1180px] mx-auto px-4 md:px-8'>
       <section className='flex flex-col-reverse  md:flex-row justify-between gap-10 '>
         {/* left */}
         <div className='w-full md:w-3/4 '>
         <DesignSlider />
         </div>
         {/* right */}
         <div className='w-full md:w-1/4 my-5 md:mt-20'>
         <h2 className="text-2xl md:text-3xl ">Web Design</h2>
         <span className="inline-block w-20 h-1 bg-blue-500"></span>
         <div className='space-y-5 mt-5'>
           <h3 className='text-xl'>We do not just web design, but out-of-the box digital experiences that takes your business to the next level!</h3>
           <p>
           Conceptual Websites
<br />
Corporate Websites
<br />
Experience Design (XD)
           </p>
         </div>
         </div>
       </section>
    </div>
  )
}

export default OurDesign
