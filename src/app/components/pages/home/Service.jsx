import Image from "next/image"
import { AiFillCode } from "react-icons/ai";

function Service() {
  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8">
    {/* service container */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
        {/* left side */}
        <div className="flex flex-col gap-5">
            {/* one card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
            {/* two card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
        </div>
        {/* center */}
        <div className="flex flex-col gap-5">
            {/* one card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
            {/* two card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-5">
            {/* one card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
            {/* two card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
        </div>
        {/* end  */}
        <div className="flex flex-col gap-5">
            {/* one card */}
            <div className="bg-white p-6 h-[360px] shadow-sm">
               <Image height={50} width={50} src='https://cdn-icons-png.flaticon.com/128/2010/2010990.png' alt="Software Developer icon"/>
               <h3 className="text-lg font-medium my-3">Software Development</h3>
               <p>Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning robust and scalable.</p>
            </div>
           
        </div>
      </section>
    </div>
  )
}

export default Service
