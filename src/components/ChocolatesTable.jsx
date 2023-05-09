import React from "react";
import { HiOutlinePencil, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ChocolatesTable = ({ chocolate, deleteChocolateItem }) => {
  return (
    <tr>
      {/* Chocolate Image */}
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={chocolate?.photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      {/* Brand Name */}
      <td>
        <p>{chocolate?.name}</p>
      </td>
      {/* Country */}
      <td>{chocolate.country}</td>
      {/* Category */}
      <td>{chocolate.category}</td>
      <td className="space-x-4">
        <Link to={`/updateChocolatesInfo/${chocolate._id}`}>
          <button className="bg-[#ffcea3] p-2 rounded-lg hover:scale-110 transition-all duration-300">
            <HiOutlinePencil className="h-6 w-6 text-[#774320]" />
          </button>
        </Link>
        <Link>
          <button
            onClick={() => deleteChocolateItem(chocolate._id)}
            className="bg-[#ffcea3] p-2 rounded-lg hover:scale-110 transition-all duration-300"
          >
            <HiXMark className="h-6 w-6 text-[#774320]" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ChocolatesTable;
