import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SearchDetails = () => {

    const { _id, cantidateFirstName, cantidateLastName, cantidateAge, cantidateHeight, cantidateGender, cantidateMaritalStatus, cantidateCountry, cantidateProfession, cantidateEducation, cantidateRelationCandidate, yourFirstName, yourLastName, phone, email, img } = useLoaderData();
    const { user } = useContext(AuthContext);

    console.log(cantidateCountry);

    return (
        <div>
            <div className="max-w-full p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex-shrink-0 lg:w-60 mb-6 lg:h-72  sm:h-32 sm:w-32 sm:mb-0">
                    <img src={img} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="space-y-1">
                    <div className='text-left'>
                        <h2 className="text-2xl font-semibold">Name : {cantidateFirstName} {cantidateLastName}</h2>
                        <span className="text-md dark:text-gray-400">Profession : {cantidateProfession}</span>

                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-md dark:text-gray-400">Age : {cantidateAge}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-md dark:text-gray-400">Height : {cantidateHeight}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-md dark:text-gray-400">Marital Status : {cantidateMaritalStatus}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-md dark:text-gray-400">Education : {cantidateEducation}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="text-md dark:text-gray-400">Location : {cantidateCountry}</span>
                    </div>

                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">leroy.jenkins@company.com</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">+25 381 77 983</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className="right col-span-3 my-4 mx-2 border rounded-md shadow-2xl">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container max-w-5xl px-2 py-12 mx-auto">
                        <div className="grid grid-cols-4">
                            <div className="img">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={img} />
                                    </div>
                                </div>
                            </div>
                            <h1>
                                {cantidateFirstName} {cantidateLastName}
                            </h1>
                            <div className="">
                                <div className="flex gap-2 ">
                                    <h4 className=" font-semibold">Age:</h4>
                                    <p className="dark:text-gray-400 ">
                                        {cantidateAge}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <h4 className=" font-semibold">Profession:</h4>
                                    <p className="dark:text-gray-400 ">Accountent</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 ">
                                    <h4 className=" font-semibold">Height:</h4>
                                    <p className="dark:text-gray-400 ">
                                        {cantidateHeight}
                                    </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <h4 className=" font-semibold">Country:</h4>
                                    <p className="dark:text-gray-400 ">
                                        {cantidateCountry}
                                    </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <h4 className=" font-semibold">Gender:</h4>
                                    <p className="dark:text-gray-400 ">
                                        {cantidateGender}
                                    </p>
                                </div>
                            </div>

                            <div className="logo">
                                <div className="space-y-3">
                                    <div className="uppercase dark:text-gray-50"></div>
                                    <div className=" justify-start ">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="Facebook"
                                            className="flex items-center p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                className="w-5 h-5 fill-current"
                                            >
                                                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="Twitter"
                                            className="flex items-center p-1"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 fill-current"
                                            >
                                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            title="Instagram"
                                            className="flex items-center p-1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32"
                                                fill="currentColor"
                                                className="w-5 h-5 fill-current"
                                            >
                                                <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="text-left">
                                <p>Hello I am jhon.I am A Developer </p>
                            </div>

                        
                        </div>
                    </div>
                </section>
            </div> */}
        </div>
    );
};

export default SearchDetails;