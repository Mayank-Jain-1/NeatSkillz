import Courses from "./Courses";
import Cover from "./Cover";
import Details from "./Details";
import DownloadProgressbtn from "./DownloadProgressbtn";
import Topbar from "./Topbar";

const Student = () => {
   return (
      <div className="flex flex-col w-full h-full rounded-s-50 bg-brandDarkGrey">
         <Topbar />
         <div className="flex flex-col relative h-full">
               <Cover />
            <div className="h-full flex">
               <div className="flex h-full flex-col justify-end items-center px-16 py-14">
                  <Details />
                  <div className="px-6 w-full mt-12">
                     <DownloadProgressbtn className="w-full" />
                  </div>
               </div>
               <div className="flex flex-col h-full w-full pr-10 pl-4 py-14">
                  <Courses />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Student;
