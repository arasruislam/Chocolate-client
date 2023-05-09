import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ChocolatesTable from "./ChocolatesTable";
import Swal from "sweetalert2";

const AllChocolates = () => {
  const loadedChocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(loadedChocolates);

  const deleteChocolateItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://chocolate-website-asru-islam.vercel.app/chocolates/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "chocolate data had been deleted successfully",
                "success"
              );
            }
            const remaining = chocolates.filter(
              (chocolate) => chocolate._id !== id
            );
            setChocolates(remaining);
          });
      }
    });
  };
  return (
    <div className="max-w-sm md:mx-w-xl lg:max-w-screen-lg mx-auto">
      <Link
        to="/addChocolates"
        className="flex gap-2 items-center border-b-2 py-4 mt-8"
      >
        <button className="btn btn-sm bg-[#DC8D48] border-none">
          <FaPlus className="mr-2" /> Add Chocolates
        </button>
      </Link>
      <h1>total: {chocolates.length}</h1>

      {/* All Chocolate At a glance */}

      <div className="mt-8">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th className="bg-[#ffba7e] text-white">Image</th>
                <th className="bg-[#ffba7e] text-white">Name</th>
                <th className="bg-[#ffba7e] text-white">Country/Factory</th>
                <th className="bg-[#ffba7e] text-white">Category</th>
                <th className="bg-[#ffba7e] text-white">Actions</th>
              </tr>
            </thead>
            {/* T-body */}
            <tbody className="text-center">
              {chocolates.map((chocolate) => (
                <ChocolatesTable
                  key={chocolate?._id}
                  chocolate={chocolate}
                  deleteChocolateItem={deleteChocolateItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllChocolates;
