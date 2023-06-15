import Search from "/Search.png";
import RightIcon from "/RightIcon.png"
import Delete from "/Delete.png"
import DownIcon from "/DownIcon.png"
const Product = [
  { name: "2”x4” Drop-in T-Bar (1/2” Flex)", Length: "100 M", quantity: "-" },
  { name: "1”x4” Surface Fluor Fixt", Length: "-", quantity: "120" },
  { name: "1/2” EMT DC SS Connector", Length: "-", quantity: "270" },
  { name: "2”x4” Drop-in T-Bar (1” Flex)", Length: "1200 M", quantity: "-" },
  { name: "3” EMT DC SS Connector", Length: "-", quantity: "500" },
  { name: "2”x6” Surface Fluor Fixt", Length: "-", quantity: "1200" },
];
const MidRightBottum = () => {
  return (
    <div>
      <div className="w-full h-20 flex mt-4 p-5 gap-8 ">
        <div className="">
          <div className="flex justify-end">
            <div className="relative  3xl:block border rounded-xl shadow-md px-8 py-2 pl-10 bg-white">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <img src={Search} alt="Search Icon" className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search Projects"
                className=" focus:outline-none focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="h-auto flex justify-center items-center gap-4">
          <label className="opacity-40">Sort by</label>
          <select id="job" className="border rounded-lg p-2 shadow" name="job">
            <option value="developer">Name</option>
            <option value="designer">Age</option>
            <option value="manager">Easy</option>
          </select>
        </div>
        <div className="">
          <button className="bg-[#FFFFFF] hover:shadow-xl flex flex-row gap-2 justify-center items-center rounded-md w-24 px-4 text-[#3153CD] border shadow-md text-[12px] py-2.5">
          Import <img src={DownIcon} alt="DownIcon" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl h-auto p-4 m-4 overflow-y-auto">
        <table className="">
          <thead className="text-[#000000] opacity-40 ">
            <tr className="">
              <th className="w-[10%] text-left py-4 text-white">.....</th>
              <th className=" w-[10%] text-left py-4">Sl No</th>
              <th className="w-[50%] text-left py-4">Assembly Name</th>
              <th className="w-[15%] text-left py-4">Length</th>
              <th className="w-[15%] text-left py-4">Quantity</th>
              <th className="w-[20%] text-left py-4 text-white">.....</th>
            </tr>
          </thead>
          <tbody className="">
            {Product.map((value, index) => {
              return (
                <tr className=" border-b-2 py-4" key={index}>

                  <td className=" text-left py-4"><img src={RightIcon} alt="RightIcon" /></td>
                  <td className=" text-left py-4">{index + 1}</td>
                  <td className=" text-left py-4">{value.name}</td>
                  <td className=" text-left py-4 text-[#3153CD] font-bold">{value.Length}</td>
                  <td className=" text-left py-4 text-[#3153CD] font-bold">{value.quantity}</td>
                  <td className=" text-left py-4">
                    <div><img src={Delete} alt="Delete" width={18} className=" "/></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MidRightBottum;
