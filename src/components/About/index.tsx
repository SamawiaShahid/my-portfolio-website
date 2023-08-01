import Image from "next/image";
import Link from "next/link";

const About=()=>{
    return(
      <div id="About" className="mt-20 ml-10 lg:ml-28 grid grid-cols-1 lg:grid-cols-3">
        <h1 className="text-5xl lg:ml-28 font-bold hover:text-yellow-200">About</h1>
         <div className="card1">
          <Image src="/purple.jpg"alt="Eiffel Tower" className=" ml-10 rounded-full  border-white border-4" height={100} width={200}></Image>
          <p className="mt-10 px-2">Hello, I am Samavia Shahid, an undergraduate student pursuing a Bachelor of Science in Information Technology
           (BSIT). I am also a passionate learner and explorer in the field of the metaverse. As a BSIT student, I have developed a keen interest in the concept of the metaverse and its potential to revolutionize
           digital experiences.  </p>
         </div>
         <div className="card2">
          <Image src="/web.jpg" alt=""className="ml-7 rounded-full border-white border-4" height={100} width={200}></Image>
          <p className="mt-10">As a dedicated student of BSIT and a metaverse enthusiast, I am committed to continuously expanding my knowledge and
          expertise in this field. I aspire to contribute to the development and advancement of the metaverse, harnessing its
          potential to shape the future of digital experiences.</p>
         </div>
    </div>

    )
}

export default About;

