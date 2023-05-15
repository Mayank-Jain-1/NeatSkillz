import Image from "next/image"
import DownloadSm from "../../assets/DownloadSm.png"

const DownloadProgressSm = ({className}) => {
   return (
      <button className={`${className} flex items-center justify-center bg-brandPrimary rounded-10 h-[53px] w-60`}>
        <Image src={DownloadSm} className="mr-1"/>
        <p className="text-sm">
        Download Progress Report
        </p>
  
     </button>
    )
}

export default DownloadProgressSm