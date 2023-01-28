import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const PriviledgesCard = ({ priviledge }) => {
  console.log(priviledge.title);

  const [priviledgeData, setPriviledgeData] = useState("");
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleBuyNow = (_id) => {
    fetch(`http://localhost:5000/priviledges/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPriviledgeData(data);
      });

    console.log(priviledgeData.package);

    fetch(`http://localhost:5000/userTypeUpdate/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userType: priviledgeData.package }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success(`${priviledgeData.package} Package is Buy Now`);
  };

  console.log(user?.email);

  return (
    <section className="py-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="container px-2 mx-auto">
        {/* <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase dark:text-violet-400">Pricing</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                </div> */}
        <div className="flex flex-wrap items-stretch -mx-4">
          {/* <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        
                    </div> */}
          <div className="flex flex-col p-4 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900 bg-lime-600 ml-20 ">
            <div className="space-y-1  text-white">
              {/* <h4 className="text-xl font-bold">Beginner</h4> */}
              <span className="text-4xl font-bold">{priviledge?.package}</span>
            </div>
            <p className="mt-3 leading-relaxed dark:text-gray-400"></p>
            <ul className="flex-1 mb-6 dark:text-gray-400  text-white">
              {priviledge?.title?.map((t, i) => (
                <li key={i} className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>
                    <span>{t?.priviledgesName}</span>
                    <span>
                      {t?.priviledgesOption === "Yes"
                        ? ""
                        : " " + t?.priviledgesOption + " " + "Times"}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleBuyNow(priviledge._id)}
              type="button"
              className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-400 bg-white dark:text-black-900"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriviledgesCard;
