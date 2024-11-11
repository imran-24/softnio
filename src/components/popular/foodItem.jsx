/* eslint-disable react/prop-types */


const FoodItem = ({title, subtitle, image}) => {
  return (
    <div className="bg-white w-full flex flex-col items-center rounded-md ">
        <img src={image} alt="" className="h-28 w-28  object-contain object-center"  />
        <div className="w-1/3 h-1 m-auto bg-red-500"></div>
        <div className="text-center my-4 space-y-2">
            <p className=" font-semibold uppercase">{title}</p>
            <p className="text-xs">{subtitle}</p>
        </div>
    </div>
  )
}

export default FoodItem