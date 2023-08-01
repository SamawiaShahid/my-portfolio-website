import Image from "next/image";

const Hero=()=>{
    return(
      <div className="first image flex flex-col lg:flex-row justify-between">
      <div className="order-2 p-0 lg:p-20 mt-5 lg:mt-0">
        <Image src="/women.png" alt="Description of the image" width={400} height={100} />
      </div>
      <div className="Intro">
         <h3 className="mt-32 text-yellow-300 lg:mt-36 text-xl ml-5 lg:ml-28 font-sans tracking-wide">
          Hello It&apos;s Me
          </h3>
           <h1 className="mt-3 text-[#0ef] lg:mt-5 text-4xl font-bold ml-5 lg:ml-28 font-sans hover:font-serif">
            Samavia Shahid
           </h1>
        <p className="mt-2 text-sm leading-relaxed lg:mt-5 lg:ml-28 ml-2 w-[89%] lg:w-[30%] text-yellow-300 tracking-wider">
          I am a Frontend Developer. As a frontend developer, I strive to create captivating digital experiences 
          that blend beautiful design with seamless functionality.
        </p>
      </div>
    </div>
    )
}
export default Hero;