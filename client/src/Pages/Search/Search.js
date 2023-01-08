import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100 bg-black bg-transparen75 bg-opacity-80">
                    <div className="card-body">

                        <div className='grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                            <div className="form-control">
                                <span className="label-text text-white text-left ">Looking For</span>
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>
                                        Looking For
                                    </option>
                                    <option>Bride</option>
                                    <option>Groom</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <span className="label-text text-white text-left ">Marital Status</span>
                                <select className="select w-full max-w-xs">
                                    <option disabled selected>
                                        Doesn't Matter
                                    </option>
                                    <option>Doesn't Matter</option>
                                    <option>Never Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <span className="label-text text-white text-left ">Have children</span>
                                <select className="select w-full max-w-xs">
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


                        <div className='grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>

                            <div className="form-control">
                                <span className="label-text text-white text-left">Min Age</span>
                                <select className="select w-full max-w-xs">
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
                                <span className="label-text text-white text-left">Max Age</span>
                                <select className="select w-full max-w-xs">
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
                                <span className="label-text text-white text-left">Height</span>
                                <select className="select w-full max-w-xs">
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


                        <div className='grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900'>
                            <div className="form-control">
                                <span className="label-text text-white text-left ">Religion</span>
                                <select className="select w-full max-w-xs">
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
                                <span className="label-text text-white text-left ">Country</span>
                                <select className="select w-full max-w-xs">
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
                            <button className="btn btn-primary text-white bg-green-500">
                                Search
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Search;