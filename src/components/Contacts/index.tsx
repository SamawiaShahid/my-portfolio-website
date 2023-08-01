
import Link from "next/link";
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
const Contacts =()=>{
    return(
        
        <div className="contacts flex justify-center mt-10">
        <div className="flex space-x-5 mb-10 flex-row " id='contacts'>
         
             
              <Link href="/#" rel="noopener noreferrer" className="bg-gray-600 h-[62px] w-[60px] flex justify-center rounded-full hover:bg-[#61c5ec]">
                <BsTwitter className="mt-5 h-6 w-6"/>
              </Link> 
              <Link href="#"  rel="noopener noreferrer" className="bg-gray-600 h-[62px] w-[60px] flex justify-center rounded-full hover:bg-[#E1306C]">
              <FiInstagram className="mt-5 h-6 w-6"/>
              </Link>
              <Link href="#"  rel="noopener noreferrer" className="bg-gray-600 h-[62px] w-[60px] flex justify-center rounded-full hover:bg-[#3B5998]">
               <FaFacebookF className="mt-5 h-6 w-6"/>
              </Link>
              <Link href="/#" rel="noopener noreferrer" className= "bg-gray-700 h-[62px] w-[60px] flex justify-center rounded-full hover:bg-black">
                <BsGithub  className="mt-5 h-6 w-6 "/>
              </Link>
            </div>
           
          </div>
    )
}
export default Contacts;