/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import LeftArrow from "/LeftArrow.png";
import LeftTable from "./LeftTable";
import Search from "/Search.png";
import {  useState } from "react";
const MidLeft = () => { 

  const sourceData = { Products: [
    { id:"Company", type: 'C', name: 'Fixture' },
    { id:"Company", type: 'C', name: 'Switches' },
    { id:"Company",type: 'C', name: 'Receptacles' },
    { id:"Company",type: 'C', name: 'Computer & Phone' },
    { id:"Company",type: 'C', name: 'Fire Alarm' },
    { id:"Company",type: 'C', name: 'EMT (Branch)' },
    { id:"Company",type: 'C', name: 'EMT (Feeder)' },
    { id:"Company", type: 'C', name: 'GRC (Feeder)' },
    { id:"Company",type: 'C', name: 'GRC (Branch) ' },
    { id:"Company",type: 'C', name: 'Cable (Branch)' },
    { id:"Company", type: 'C', name: 'Cable (Feeder)' },
    { id:"Company",type: 'C', name: 'Services' },
    { id:"Company",type: 'C', name: 'Panels' },
    { id:"Company",type: 'C', name: 'Manual Disconnects'},
  ]
  ,
  Company:[
  { id:"Categories", type: 'C', name:"Recessed Fluorescent"},
  { id:"Categories",type: 'C', name:"Surface Fluorescent"},
  { id:"Categories",type: 'C', name:"Recessed Incandescent"},
  { id:"Categories",type: 'C', name:"Surface Incandescent"},
  { id:"Categories",type: 'C', name:"Recessed HO"},
  { id:"Categories",type: 'C', name:"Surface HO"},
  { id:"Categories",type: 'C', name:"Exit & Emergency"},
  { id:"Categories",type: 'C', name:" Fans & Miscellaneous"},
  { id:"Categories",type: 'C', name:"Spec Fixtures ( Type A....)"},
  { id:"Categories",type: 'C', name:"Fixture Connections"},
  ],
  Categories:[
  { id:"Products",type: 'A', name:"2x4” Drop-In T-Bar (1/2” Flex)"},
     { id:"Products",type: 'A', name:"1x4” Drop-In T-Bar (1/2” Flex)"},
     {id:"Products", type: 'A', name:"2x4” Drop-In T-Bar (14/2” BX)"},
     { id:"Products",type: 'A', name:"1x4” Drop-In T-Bar (14/2” BX)"},
     { id:"Products",type: 'C', name:"2x2” Drop-In T-Bar (14/2” BX)"},
     { id:"Products",type: 'C', name:"2x4” Drop-In T-Bar (12/2” BX)"},
     { id:"Products",type: 'C', name:"1x4” Drop-In T-Bar (12/2” BX)"},
     { id:"Products",type: 'C', name:"2x4” Drop-In T-Bar (12/2” BX)"},
     { id:"Products",type: 'C', name:"1x4” Drop-In T-Bar (14/2” Teck)"},
     { id:"Products",type: 'C', name:"1x4” Drop-In T-Bar (12/2” Teck)"},
   ]}


 const [arr,setArr]=useState(sourceData.Products)

 function MYcallback(data){
  console.log(data)
  setArr(getArrayByKey(data))  
 }



 const getArrayByKey = ( data ="Product") => {
  if (sourceData.hasOwnProperty(data)) {
    return sourceData[data];
  }
  return []; // Return an empty array as the default value
}

  return (
    <div className="w-[30rem]  truncate ">
      <div className="w-full h-20 flex mt-4 p-5 gap ">
        <div
          className="w-1/2 flex gap-2 items-center"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontStyle: "normal",
          }}
        >
          <img src={LeftArrow} alt="" className="w-6 h-6" />
          <h1 className="font-bold text-xl ">Categories</h1>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end">
            <div className="relative  3xl:block border rounded-xl shadow-md px-8 py-2 pl-10 bg-white">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <img src={Search} alt="Search Icon" className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search Categories"
                className=" focus:outline-none focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      {/* left Table */}
      <LeftTable  data={arr} callback={MYcallback} />
    </div>
  );
};

export default MidLeft;
