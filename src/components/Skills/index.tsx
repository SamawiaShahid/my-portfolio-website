import Image from "next/image";

const Skills=()=>{
    return(
<div className="">
    <div className="main"> 
    <h1 className="lg:ml-28 ml-5 mt-20 text-5xl font-bold hover:text-purple-400">Skills</h1>
      <section id="skills" className="flex md:flex-row mt-20 flex-col lg:justify-center md:gap-28 md:ml-0 sm:gap-10 ml-3 gap-10  ">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <Image src="/htmlimg.jpg" alt=""className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back2.jpg" alt=""className="ml-20" height={100} width={140} ></Image>
                <h3 className="wire">HTML</h3>
                <h1>Markup language for creating web pages.</h1>
            </div>
        </div>
        </div>
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front " >
                <Image src="/cssimg.jpg" alt=""className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back3.jpg" alt=""className="ml-16" height={100} width={140} ></Image>
                <h3 className="">CSS</h3>
                <h1>Styling language for designing web page layouts.</h1>
            </div>
        </div>
        </div>
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <Image src="/javascript.jpg" alt=""className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back1.jpg" alt=""className="ml-20" height={100} width={140} ></Image>
                <h3 className="wire">Java Script</h3>
                <h1>Versatile scripting language for interactive web development.</h1>
            </div>
        </div>
        </div>
    </section>
        <section id="skills" className="flex md:flex-row flex-col md:justify-center lg:ml-0 gap-10 md:gap-28 ml-3 md:mt-20 mt-10">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <Image src="/card4.jpg" alt="" className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back6.jpg" alt=""className="ml-20" height={100} width={140} ></Image>
                <h3 className="">Next JS</h3>
                <h1>React-based framework for server-rendered web applications.</h1>
            </div>
        </div>
        </div>
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <Image src="/card5.jpg" alt=""className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back5.jpg" alt=""className="ml-20" height={100} width={140} ></Image>
                <h3 className="">Type Script</h3>
                <h1>Typed superset of JavaScript for enhanced development.</h1>
            </div>
        </div>
        </div>
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <Image src="/card6.jpg" alt=""className="ml-10" height={100} width={200}></Image>
            </div>
            <div className="flip-card-back">
                <Image src="/back4.jpg" alt=""className="ml-20" height={100} width={200} ></Image>
                <h3 className="wire">Git Hub</h3>
                <h1>Hub of collaborative coding and version control.</h1>
            </div>
        </div>
        </div>
    </section>
      </div>
      </div>
    )
}
export default Skills;