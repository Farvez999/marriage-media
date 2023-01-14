import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SearchDetails = () => {
  const {
    _id,
    cantidateFirstName,
    cantidateLastName,
    cantidateAge,
    cantidateHeight,
    cantidateGender,
    cantidateMaritalStatus,
    cantidateCountry,
    cantidateProfession,
    cantidateEducation,
    cantidateRelationCandidate,
    yourFirstName,
    yourLastName,
    phone,
    email,
    img,
  } = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(cantidateCountry);

  return (
    <>
      {/* <div>
        <div className="max-w-full p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex-shrink-0 lg:w-60 mb-6 lg:h-72  sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={img}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
            />
          </div>
          <div className="space-y-1">
            <div className="text-left">
              <h2 className="text-2xl font-semibold">
                Name : {cantidateFirstName} {cantidateLastName}
              </h2>
              <span className="text-md dark:text-gray-400">
                Profession : {cantidateProfession}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-md dark:text-gray-400">
                Age : {cantidateAge}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-md dark:text-gray-400">
                Height : {cantidateHeight}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-md dark:text-gray-400">
                Marital Status : {cantidateMaritalStatus}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-md dark:text-gray-400">
                Education : {cantidateEducation}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-md dark:text-gray-400">
                Location : {cantidateCountry}
              </span>
            </div>

            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">
                  leroy.jenkins@company.com
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">+25 381 77 983</span>
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* ................. */}
      <div className=" col-span-2 text-left ">
        <div className="right col-span-2 my-4 ml-10 mr-10 border rounded-md shadow-2xl">
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-5xl px-2 py-12">
              <div className="grid grid-cols-4">
                <div className="img gap-10">
                  <div className="avatar">
                    <div className="flex-shrink-0 lg:w-60 mb-6 lg:h-72  sm:h-32 sm:w-32 sm:mb-0">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
                
                <div className="ml-10">
                  <div className="flex gap-2 ">
                    <h2 className="text-2xl font-semibold">
                      Name : {cantidateFirstName} {cantidateLastName}
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <h4 className=" font-semibold">Profession:</h4>
                    <p className="dark:text-gray-400 ">{cantidateProfession}</p>
                  </div>
                  <div className="flex gap-2 ">
                    <h4 className=" font-semibold">Age:</h4>
                                      <p className="dark:text-gray-400 ">{ cantidateAge}</p>
                  </div>
                  <div className="flex gap-2 ">
                    <h4 className=" font-semibold">Maritial Status:</h4>
                                      <p className="dark:text-gray-400 ">{cantidateMaritalStatus}</p>
                  </div>
                  <div className="flex gap-2 ">
                    <h4 className=" font-semibold">Height:</h4>
                                      <p className="dark:text-gray-400 ">{cantidateHeight}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ........... */}
      {/* Introduction */}

      {/* <div className="overflow-hidden bg-white shadow sm:rounded-lg border ml-10 mr-10">
        <div className="px-4 py-5 sm:px-6 text-left">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Introduction
          </h3>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-left">
             
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Student of BSS in Sociology{" "}
              </p>
            </div>
          </dl>
        </div>
      </div> */}
      {/* personal information */}

      <div className="overflow-hidden bg-white shadow sm:rounded-lg text-left border ml-10 mr-10 mt-10 drop-shadow-2xl mb-10  ">
        <div className="px-4 py5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="border-t border-gray-200 ">
          <dl className="">
            <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">First name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateFirstName}
              </dd>
            </div>
            <div className="bg-white py-2   sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Last Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateLastName}
              </dd>
            </div>
            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Gender</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateGender}
              </dd>
            </div>
            <div className="bg-white py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateAge}
              </dd>
            </div>
            <div className="bg-white py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Height</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateHeight}
              </dd>
            </div>
            <div className="bg-gray-50 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Maritial status
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateMaritalStatus}
              </dd>
            </div>
            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Country</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateCountry}
              </dd>
            </div>

            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Education</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateEducation}
              </dd>
            </div>

            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Profession</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateProfession}
              </dd>
            </div>
            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Relation with candidate
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {cantidateRelationCandidate}
              </dd>
            </div>

            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">phone</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {phone}
              </dd>
            </div>

            <div className="bg-gray-50 py-2  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default SearchDetails;
