import Image from "next/image";
import Rectangle from "../../assets/Rectangle.png";
import Women from "../../assets/Women.png";

const Cover = () => {
   return (
      <div className="absolute top-0 w-full">
         <div className="relative h-32 min-h-32 ">
            <div className="flex items-center absolute z-10 ml-16 bottom-0 translate-y-1/2">
               <Image src={Women} className="" />
               <p className="text-2xl mt-10 ml-3">Aashna Mital</p>
            </div>
            <Image
               src={Rectangle}
               className="h-32 w-full object-cover absolute top-0"
            />
         </div>
      </div>
   );
};

export default Cover;
