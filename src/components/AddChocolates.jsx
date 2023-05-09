import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolates = () => {
  const addNewChocolate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const addChocolate = { name, country, category, photo };
    console.log(addChocolate);

    fetch("https://chocolate-website-asru-islam.vercel.app/chocolates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Chocolate Item Add Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      });
  };

  return (
    <div className="max-w-sm md:mx-w-xl lg:max-w-screen-lg mx-auto">
      <Link to="/" className="flex gap-2 items-center border-b-2 py-4 mt-8">
        <button className="btn btn-sm bg-[#DC8D48] border-none">
          <FaArrowLeft className="mr-2" /> All Chocolates
        </button>
      </Link>

      {/* Chocolate Information */}
      <div className="max-w-sm md:mx-w-xl lg:max-w-screen-lg mx-auto mt-8 bg-gray-100">
        <div className="text-center my-8 pt-4">
          <h1 className="text-2xl font-semibold font-Poppins">New Chocolate</h1>
          <p className="text-gray-500 font-Poppins">
            Use the below form to create a new product
          </p>
        </div>

        <form onSubmit={addNewChocolate}>
          <div className="hero-content pt-0">
            <div className="card w-full">
              <div className="card-body">
                {/* Name field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
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
                    name="category"
                    defaultValue={"default"}
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
                    type="url"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChocolates;
