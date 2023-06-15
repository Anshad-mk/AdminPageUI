import Return from "/ReturnArrow.png";
import Option from "/Option.png";
import SideOptions from "./SideOptions";


const LeftBar = () => {
  let SideBar =["Notes","Take off","Extension","DiLb","IncLb","LbFac","LbEsc","IndLb","Sbcon","Gen Exp","Qt Mat","Qt Mat"]
  return (
    <div className="text-black bg-white w-[5rem] h-screen ">
      <div className="bg-[#3153CD] w-full h-16 hover:cursor-pointer">
        <div className="flex items-center justify-center h-full flex-col gap-2">
          <img src={Return} alt="Return" />
        <div>
        <h1 className="text-[12px] text-white font-semibold">Back to Jobs</h1>
        </div>
        </div>
      </div>
      {SideBar.map((value,index)=>{
        return (
        <SideOptions key={index} img={Option} Head={value}  />
        )
      })}
      
    </div>
  );
};

export default LeftBar;
