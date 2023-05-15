import Image from "next/image"
import ArrowLeft from "../../assets/ArrowLeft.png"

const Backbtn = ({className}) => {
  return (
    <button className={`${className} flex  items-center justify-center h-11  bg-brandBgGrey rounded-10`}>
      <Image src={ArrowLeft} className="ml-5 mr-3.5"/>
        <p className="mr-8 text-sm font-bold">
          Back
        </p>
    </button>
  )
}

export default Backbtn