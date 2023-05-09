import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolatesInfo = () => {
  const loadSingleChocolateData = useLoaderData();

  const updateChocolateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updatedChocolate = { name, country, category, photo };
    console.log(updatedChocolate);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to update the information!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://chocolate-website-asru-islam.vercel.app/chocolates/${loadSingleChocolateData._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedChocolate),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Success!",
                "Chocolate Information has been Updated.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="max-w-sm md:mx-w-xl lg:max-w-screen-lg mx-auto">
      <Link to="/" className="flex gap-2 items-center border-b-2 py-4 mt-8">
        <button className="btn btn-sm bg-[#DC8D48] border-none">
          <FaArrowLeft className="mr-2" /> All Chocolates
        </button>
      </Link>

      <div className="max-w-sm md:mx-w-xl lg:max-w-screen-lg mx-auto mt-8 bg-gray-100">
        <div className="text-center my-8 pt-4">
          <h1 className="text-2xl font-semibold font-Poppins">
            Update Chocolate
          </h1>
          <p className="text-gray-500 font-Poppins mt-4">
            The Chocolate Information Update for{" "}
            <strong>{loadSingleChocolateData.name}</strong>
          </p>
        </div>

        <form onSubmit={updateChocolateInfo}>
          <div className="hero-content pt-0">
            <div className="card w-full">
              <div className="card-body">
                {/* Name field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    defaultValue={loadSingleChocolateData.name}
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                {/* Country Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <input
                    defaultValue={loadSingleChocolateData.country}
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="input input-bordered"
                  />
                </div>

                {/* Category Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    defaultValue={loadSingleChocolateData.category}
                    name="category"
                    className="select w-full input input-bordered"
                  >
                    <option disabled value="default">
                      Category
                    </option>
                    <option>Basic</option>
                    <option>Standard</option>
                    <option>Premium</option>
                  </select>
                </div>
                {/* photo Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    defaultValue={loadSingleChocolateData.photo}
                    type="url"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">update</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateChocolatesInfo;
