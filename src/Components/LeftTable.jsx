/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import RightArrow from "/RightArrow.png";
import ModelForAdd from "./ModelForAdd";

const LeftTable = (props) => {
  const handleChange = (id) => {
    let check = document.getElementById(id).value;

    return check;
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [data, props.data]);
  return (
    <div className="bg-white rounded-2xl h-auto p-4 m-4 overflow-y-auto">
      <table className="">
        <thead className="text-[#000000] opacity-40 ">
          <tr className="">
            <th className=" w-[18%] text-left py-4">Sl No</th>
            <th className="w-[60%] text-left py-4">Name</th>
            <th className="w-[20%] text-left py-4">Type</th>
            <th className="w-[20%] text-left py-4 text-white">.....</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((value, index) => {
            return (
              <tr className=" border-b-2 py-4" key={index}>
                <td className=" text-left py-4">{index + 1}</td>
                <td
                  className=" text-left py-4"
                  onClick={() => {
                    props.callback(handleChange(index + value.name));
                  }}
                >
                  {" "}
                  <input
                    type="hidden"
                    value={value.id}
                    id={index + value.name}
                  />
                  {value.name}{" "}
                </td>
                <td className=" text-left py-4">{value.type}</td>
                {"Products" !== value.id ? (
                  <td className=" text-left py-4">
                    <img
                      src={RightArrow}
                      alt="RightArrow"
                      height={25}
                      width={25}
                      className="h-6 w-8 "
                    />
                  </td>
                ) : (
                  <div className="text-left py-4">
                    <ModelForAdd />{" "}
                  </div>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeftTable;
