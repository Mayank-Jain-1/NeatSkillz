import Image from "next/image";
import Laptop from "../../assets/Laptop.png";
import DownloadProgressSm from "./DownloadProgressSm";

const CourseDetail = () => {
   return (
      <div className="bg-brandDarkGrey rounded-30 border border-brandLightGrey w-520 mb-5">
         <div className="flex px-7 items-center pt-2 pb-4 border-b border-brandLightGrey">
            <Image src={Laptop} className="mr-6" />
            <div>
               <p className="text-xl">Introduction to C++</p>
               <p className="text-sm text-brandPrimary">Course</p>
            </div>
         </div>
         <div className="flex px-6 text-lg py-9">
            <div className="space-y-10 mr-6">
               <p>
                  Time taken:-{" "}
                  <span className="text-brandSecondary pl-4">90 days</span>
               </p>
               <p>
                  Expertise level:-
                  <span className="text-brandSecondary pl-4">Beginner</span>
               </p>
            </div>
            <div className="space-y-10">
               <p>
                  Scored (in total) :-
                  <span className="text-brandSecondary pl-4">90 95%</span>
               </p>
               <p>
                  Remarks :- 
                  <span className="text-brandSecondary pl-4">Good Pace</span>
               </p>
            </div>
         </div>
         <div className="flex justify-end px-10 pb-6">
            <DownloadProgressSm className={"h-10 px-2"} />
         </div>
      </div>
   );
};

export default CourseDetail;
