import Image from "next/image"
import Vector from "../../assets/Vector.png"

const CoursesBtnArrow = ({text}) => {
  return (
    <button className="bg-brandPurple flex justify-center items-center w-40 rounded-10 h-12">
      <p>
        {text}
      </p>
      <Image src={Vector} className="ml-2"/>
    </button>
  )
}

export default CoursesBtnArrow