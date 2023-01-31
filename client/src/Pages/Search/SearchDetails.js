import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

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
    userType
  } = useLoaderData();

  const { user } = useContext(AuthContext);

  console.log(userType);

  const [profiles, setProfiles] = useState([]);;

  useEffect(() => {
    fetch(`https://server-teal-seven.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setProfiles(data))
  })

  console.log(profiles.userType);

  return (
    <>

      <div className=" col-span-2 text-left">
        <div className="col-span-2 my-4 ml-10 mr-10 border rounded-md shadow-2xl">
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-5xl px-2 py-12">
              <div className="grid grid-cols-3">

                <div className="img gap-10 ml-20">
                  <div className="avatar">
                    <div className="flex-shrink-0 lg:w-60 mb-6 lg:h-72  sm:h-32 sm:w-32 sm:mb-0">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>

                <div className="ml-10">
                  <div className="flex gap-2 ">
                    <h2 className="text-2xl font-semibold">
                      Name : {profiles.userType === 'Sliver' ? cantidateFirstName + ' ' + cantidateLastName : 'Private' && profiles.userType === 'Gold' ? cantidateFirstName + ' ' + cantidateLastName : 'Private'}
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <h4 className=" font-semibold">Profession:</h4>
                    <p className="dark:text-gray-400 ">{cantidateProfession}</p>
                  </div>
                  <div className="flex gap-2 ">
                    <h4 className=" font-semibold">Age:</h4>
                    <p className="dark:text-gray-400 ">{cantidateAge}</p>
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
                {/* {userType === 'Sliver' ? phone : 'Private' && userType === 'Gold' ? phone : 'Private'} */}
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
