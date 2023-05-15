import CourseDetail from "./CourseDetail"
import Coursebtn from "./Coursebtn"
import CoursesBtnArrow from "./CoursesBtnArrow"
import Search from "./Search"

const Courses = () => {
  return (
    <div className="bg-brandGrey flex flex-col h-full w-full z-10 my-14 mr-9 rounded-30  px-10 pt-10 overflow-hidden">
      <Search className={"h-12.5"}/>
      <div className="flex items-center justify-between my-8">
        <CoursesBtnArrow text={"Status"}/>
        <CoursesBtnArrow text={"Skills"}/>
        <Coursebtn text={"Performance"}/>
      </div>
      <div className="overflow-y-scroll max-h-full h-full flex flex-col items-center">
        <CourseDetail />
      </div>
    </div>
  )
}

export default Courses