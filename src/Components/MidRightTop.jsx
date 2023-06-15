import { useState } from "react";

const MidRightTop = () => {

    const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className="w-full  flex mt-2 px-5 pt-5  ">
        <div
          className="w-1/2 flex gap-2 items-center"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontStyle: "normal",
          }}
        >
          <h1 className="font-bold text-xl ">Job</h1>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end gap-4">
            <h1 className="text-[#000000] opacity-40 ">Quote Status</h1>
            <select id="job" className="flex items-center justify-between px-6 py-2 text-sm font-medium text-white bg-[#038A00] rounded-full" name="job">
            <option value="developer">High</option>
            <option value="designer">Midium</option>
            <option value="manager">Easy</option>
          </select>
                
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl h-auto p-4 mx-4 my-2 flex gap-10">
        <div className="flex flex-col gap-4 text-[#000000] opacity-50">
          <p>Job Name</p>
          <p>Job Number</p>
          <p>Unit</p>
          <p>Difficulty Level</p>
        </div>
        <div className="flex flex-col gap-4 font-semibold w-full">
          <p>Test Project 1</p>
          <p>#ABV3265413</p>
          <p>
            <label className="relative inline-flex cursor-pointer items-center justify-center rounded-full border p-1 shadow-inner">
              <input
                type="checkbox"
                className="sr-only"
                onChange={() => {
                  setToggle(!toggle);
                }}
              />
              <span
                className={
                  toggle
                    ? " flex items-center rounded-full px-3 text-sm font-medium"
                    : "flex items-center rounded-full px-3 text-sm font-medium bg-[#3153CD]"
                }
              >
                Metric
              </span>
              <span
                className={
                  toggle
                    ? "bg-[#3153CD] dark text-body-color flex items-center  rounded-full px-3 text-sm font-medium"
                    : "dark text-body-color flex items-center  rounded-full px-3 text-sm font-medium"
                }
              >
                Us
              </span>
            </label>
          </p>
          <select id="job" className="border rounded-lg w-[30%]" name="job">
            <option value="developer">High</option>
            <option value="designer">Midium</option>
            <option value="manager">Easy</option>
          </select>
        </div>
        <div className="flex flex-col gap-6">
          <button className="bg-[#3153CD] hover:shadow-xl rounded-xl w-24 px-4 text-white text-[12px] py-2">Job Details</button>
          <button className="bg-[#3153CD] hover:shadow-xl rounded-xl w-24 px-4 text-white text-[12px] py-2">Button 2</button>
          <button className="bg-[#FFFFFF] hover:shadow-xl rounded-xl w-24 px-4 text-[#3153CD] border shadow-md text-[12px] py-2">Button 3</button>
        </div>
      </div>
    </div>
  )
}

export default MidRightTop
