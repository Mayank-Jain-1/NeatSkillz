import Image from "next/image"
import Download from "../../assets/Download.png"

const DownloadProgressbtn = ({className}) => {
  return (
    <button className={`${className} flex items-center justify-center bg-brandPrimary rounded-10 h-[53px]`}>
      <Image src={Download} className="mr-2"/>
      <p className="text-xl">
      Download Progress Report
      </p>

   </button>
  )
}

export default DownloadProgressbtn