

const Detail = ({description,value}) => {
   return (
      <div className="h-60 flex justify-between items-center p-6">
         <p className=" text-brandSecondary">{description}</p>
         <p className="text-center w-12 text-brandPrimary mr-16">{value}</p>
      </div>
   );
};

export default Detail;
