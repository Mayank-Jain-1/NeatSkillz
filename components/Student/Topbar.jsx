import Image from "next/image";
import Backbtn from "./Backbtn";
import Search from "./Search";
import Bell from "../../assets/Bell.png";
import Male from "../../assets/Male.png";

const Topbar = () => {
   return (
      <div className="flex justify-between pt-7 pb-5 items-center px-10">
         <Backbtn className={"ml-8"} />
         <div className="flex justify-between w-480">
            <Search className={"h-12 w-72"}/>
            <div className="flex items-center">
               <button className="mr-5">
                  <Image src={Bell} className=""/>
               </button>
               <button>
                  <Image src={Male} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Topbar;
