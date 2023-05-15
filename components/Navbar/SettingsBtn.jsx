import Image from "next/image"
import GearSix from "../../assets/GearSix.png"

const SettingsBtn = ({className}) => {
  return (
    <button className={`${className} bg-brandDarkGrey flex items-center justify-center space-x-2 w-36 h-10 rounded-md`}>
      <Image src={GearSix}/>
      <p>Settings</p>
    </button>
  )
}

export default SettingsBtn