import React, { useEffect, useRef, useState } from 'react';

const Search = () => {

    const serachRef = useRef()
    const [searchProfile, setsearchProfile] = useState([]);
    const [search, setSearch] = useState('');



    useEffect(() => {
        fetch(`http://localhost:5000/searchProfile?search=${search}`)
            .then(res => res.json())
            .then(data => setsearchProfile(data))
    }, [search]
    )

    const handleSearch = () => {
        setSearch(serachRef.current.value);
        console.log(search);
    }

    console.log(searchProfile);

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100 bg-transparen75 bg-opacity-80">
                    <div className="card-body">

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Looking For</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Looking For
                                    </option>
                                    <option>Bride</option>
                                    <option>Groom</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marital Status</span>
                                </label>
                                <select ref={serachRef} className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Doesn't Matter</option>
                                    <option>Never Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Have children</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Doesn't Matter
                                    </option>
                                    <option>Doesn't Matter</option>
                                    <option>No</option>
                                    <option>Yes. Living together</option>
                                    <option>Yes. Not living together</option>

                                </select>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Min Age</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Max Age</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>122 cm / 4'0"</option>
                                    <option>123 cm / 4'0"</option>
                                    <option>124 cm / 4'1"</option>
                                    <option>125 cm / 4'1"</option>
                                    <option>125 cm / 4'1"</option>
                                    <option>126 cm / 4'1"</option>
                                    <option>127 cm / 4'2"</option>
                                    <option>128 cm / 4'2"</option>
                                    <option>129 cm / 4'3"</option>
                                    <option>130 cm / 4'3"</option>
                                    <option>131 cm / 4'3"</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Religion</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Muslim</option>
                                    <option>Hindu</option>
                                    <option>Christian</option>
                                    <option>Buddhist</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Australia</option>
                                    <option>USA</option>
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakisthan</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education Level</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>MBA</option>
                                    <option>Bachelor</option>
                                    <option>BBA</option>
                                    <option>Diploma</option>
                                    <option>HSC</option>
                                    <option>SSC</option>
                                    <option>Dakhil</option>
                                    <option>Alim</option>
                                    <option>Fajil</option>
                                    <option>Kamil</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profession</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Accountant</option>
                                    <option>Advertising Professional</option>
                                    <option>Advocate</option>
                                    <option>Air Service</option>
                                    <option>Architect</option>
                                    <option>Auditor</option>
                                    <option>Banker</option>
                                    <option>Barrister</option>
                                    <option>BCS Cadre</option>
                                    <option>Beautician</option>
                                </select>
                            </div>
                        </div>

                        {/* <div className='grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                            <div className="form-control">
                                <span className="label-text text-white text-left ">Education Level</span>
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>MBA</option>
                                    <option>Bachelor</option>
                                    <option>BBA</option>
                                    <option>Diploma</option>
                                    <option>HSC</option>
                                    <option>SSC</option>
                                    <option>Dakhil</option>
                                    <option>Alim</option>
                                    <option>Fajil</option>
                                    <option>Kamil</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <span className="label-text text-white text-left ">Profession</span>
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Accountant</option>
                                    <option>Advertising Professional</option>
                                    <option>Advocate</option>
                                    <option>Air Service</option>
                                    <option>Architect</option>
                                    <option>Auditor</option>
                                    <option>Banker</option>
                                    <option>Barrister</option>
                                    <option>BCS Cadre</option>
                                    <option>Beautician</option>
                                </select>
                            </div>
                        </div> */}

                        {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Profile Id</span>
                                </label>
                                <input type="text" className="input input-bordered" />

                            </div> */}

                        {/* <div className="form-control">
                            <span className="label-text text-white text-left ">Photo</span>
                            <select className="select w-full max-w-xs">
                                <option disabled selected>
                                    All Profiles
                                </option>
                                <option></option>
                                <option>profiles with photo only</option>

                            </select>
                        </div> */}

                        <div className="form-control mt-6 px-6">
                            {/* <input ref={serachRef} type="text"></input> */}
                            <button onClick={handleSearch} className="btn btn-primary text-white bg-green-500">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            <>

                {
                    searchProfile.map(profile =>
                        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{profile.cantidateFirstName} {profile.cantidateLastName}</h2>
                                    <span className="text-sm dark:text-gray-400">{profile.cantidateProfession}</span>
                                </div>
                                <div className="desc grid grid-cols-2 text-left ">
                                    <div className="left">
                                        <div className="flex gap-2 ">
                                            <h4 className=" font-semibold">Age:</h4>
                                            <p className="dark:text-gray-400 ">{profile.cantidateAge}</p>
                                        </div>
                                        <div className="flex gap-2 ">
                                            <h4 className=" font-semibold">Gender:</h4>
                                            <p className="dark:text-gray-400">{profile.cantidateGender}</p>
                                        </div>
                                        <div className="flex  gap-2">
                                            <h4 className=" font-semibold">Height:</h4>
                                            <p className="dark:text-gray-400">{profile.cantidateHeight}</p>
                                        </div>

                                    </div>

                                    <div className="right">
                                        <div className="flex gap-2">
                                            <h4 className=" font-semibold">City:</h4>
                                            <p className="dark:text-gray-400">New York</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <h4 className=" font-semibold">Country:</h4>
                                            <p className="dark:text-gray-400">{profile.cantidateCountry}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <h4 className=" font-semibold">Occupation:</h4>
                                            <p className="dark:text-gray-400"></p>
                                        </div>


                                    </div>
                                    <div>
                                        <p>
                                            Magna erat stet clita et dolor voluptua ipsum at dolor,.
                                        </p>
                                    </div>
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
                    )
                }





            </>
        </div >
    );
};

export default Search;