import Image from "next/image";

const Projects =()=>{
    return(
      <div className="mt-5 lg:mt-28">
         <h1 className="ml-5 lg:ml-28 text-5xl font-bold hover:text-green-500 mt-10">Projects</h1>
  <div className="container lg:mt-28 mt-20">
   
   <div className="card">
    <div className="face face1">
      <div className="content"> 
        <Image src="/calculator.png" alt="" className="rounded-md" height={100} width={200}></Image>
      </div>
    </div>
    <div className="face face2">
      <h2 className="text-3xl">Calculator</h2>
    </div>
  </div>
   <div className="card">
    <div className="face face1">
      <div className="content">
       <span></span>
        <Image src="/comerce.jpg" alt="" className="rounded-md" height={100} width={400}></Image>
      </div>
    </div>
    <div className="face face2">
      <h2 className="text-2xl ">E-Commerce Website</h2>
    </div>
  </div>
  <div className="card">
    <div className="face face1">
      <div className="content">
        <span className="stars"></span>
        <Image src="/guess.png" alt="" className="rounded-md" height={100} width={300}></Image>
       </div>
    </div>
    <div className="face face2">
      <h2 className="text-2xl">Number Guessing Game</h2>
    </div>
  </div> 
</div></div>
    )
}
export default Projects;