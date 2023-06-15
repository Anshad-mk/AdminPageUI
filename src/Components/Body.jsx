import LeftBar from "./LeftBar"
import MidLeft from "./MidLeft"
import MidRight from "./MidRight"
const Body = () => {
  return (
    <div className="flex ">
        <div>
          <LeftBar/> 
        </div>
    <div className="border border-l shadow-md">
        <MidLeft />
    </div>
    <div className="">
       <MidRight />
    </div>
      
      
    </div>
  )
}

export default Body
