import Detail from "./Detail";

const Details = () => {
   return (<div className="rounded-3xl bg-brandDark w-412 divide-y divide-brandBgGrey">
      <Detail description="CLass:" value="10"/>
      <Detail description="Number of courses enrolled: " value="5"/>
      <Detail description="Courses completed:" value="4"/>
      <Detail description="Ongoing Courses:" value="1"/>
      <Detail description="Average Percentage:" value="75%"/>
      <Detail description="Event Participation:" value="3"/>
      <Detail description="Event Participation:" value="1"/>
      <Detail description="Highly Skilled :" value="C++"/>
      <Detail description="Least Skilled :" value="Python"/>
   </div>);
};

export default Details;
