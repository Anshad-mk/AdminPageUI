/* eslint-disable react/prop-types */
const SideOptions = (props) => {
  return (
    <div className="bg-white hover:bg-[#F2F6F9] w-full h-16  border-[#000000]-700 border-b-2 ">
    <div className="flex items-center justify-center h-full flex-col gap-2 hover:cursor-pointer shadow-md " >
      <img src={props?.img} alt="Return" className="" />
    <div>
    <h1 className="text-[12px] text-[#000000] font-semibold">{props.Head}</h1>
    </div>
    </div>
  </div>
  )
}

export default SideOptions
