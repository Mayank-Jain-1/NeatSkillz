import Navbar from "@/components/Navbar/Navbar";
import Student from "@/components/Student/Student";


const page = () => {
   return (
      <div className="flex h-screen w-screen bg-brandDark">
         <Navbar />
         <Student />
      </div>
   );
};

export default page;
