import Image from "next/image";
import Logo from "../../assets/Neatskills.png";
import Navlink from "./Navlink";
import SettingsBtn from "./SettingsBtn";

const Navbar = () => {
   return (
      <div className="bg-brandDark flex flex-col items-center justify-between py-7 w-56 h-full">
         <div>
            <Image src={Logo} />
            <ul className="w-44 px-5 my-10 space-y-10">
               {/* <ul> */}
               <li>
                  <Navlink text="Home" />
               </li>
               <li>
                  <Navlink text="Student" />
               </li>
               <li>
                  <Navlink text="Events" className="text-brandPrimary"/>
               </li>
               <div className="h-0 w-full border border-brandLightGrey px-6"></div>
               <li>
                  <Navlink text="Profile" />
               </li>
            </ul>
         </div>
         <SettingsBtn className={"mb-16"}/>
      </div>
   );
};

export default Navbar;
