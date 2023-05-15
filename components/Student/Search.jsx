import Image from "next/image"
import MagnifyingGlass from '../../assets/MagnifyingGlass.png'

const Search = ({className}) => {
  return (
   <div className={`${className} flex border-2 items-center px-3.5 border-brandLightGrey  rounded-10`}>
      <Image src={
        MagnifyingGlass} className="mr-3.5"/>
    <input className="bg-transparent placeholder:text-white outline-none" placeholder="Search"/>
   </div>
  )
}

export default Search