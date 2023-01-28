import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const serachRef = useRef();
  const [searchProfile, setsearchProfile] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/searchProfile?search=${search}`)
      .then((res) => res.json())
      .then((data) => setsearchProfile(data));
  }, [search]);

  const handleSearch = () => {
    setSearch(serachRef.current.value);
    console.log(search);
  };

  console.log(searchProfile);

  return (
    <>
      <div className="grid grid-cols-3">
        {/* <div className="hero-content flex-col lg:flex-row-reverse col-span-1">
                <div className="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-100 bg-transparen75 bg-opacity-80">
                    
                </div>


            </div> */}

        <div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 p-6 rounded-md shadow-sm dark:bg-gray-900">
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
                <select
                  ref={serachRef}
                  className="select w-full border-gray-400"
                >
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

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Min Age</span>
                </label>
                <select className="select w-full border-gray-400">
                  <option disabled selected>
                    Select
                  </option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
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
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
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

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 p-6 rounded-md shadow-sm dark:bg-gray-900">
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

            <div className="form-control  px-6">
              <button
                onClick={handleSearch}
                className="btn btn-primary text-white bg-green-500"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2 my-10">
          {searchProfile.map((profile) => (
            <div className="right col-span-3 my-4 mx-2 border rounded-md shadow-2xl">
              <section className="dark:bg-gray-800 dark:text-gray-100  hover:drop-shadow-2xl">
                <div className="container max-w-5xl px-2 py-12 mx-auto">
                  <div className="grid grid-cols-4">
                    <div className="img">
                      <div className="avatar">
                        <div className="w-24 rounded">
                          <img src={profile.img} />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex gap-2 ">
                        <h4 className=" font-semibold">Age:</h4>
                        <p className="dark:text-gray-400 ">
                          {profile.cantidateAge}
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
                          {profile.cantidateHeight}
                        </p>
                      </div>
                      <div className="flex gap-2 ">
                        <h4 className=" font-semibold">Country:</h4>
                        <p className="dark:text-gray-400 ">
                          {profile.cantidateCountry}
                        </p>
                      </div>
                      <div className="flex gap-2 ">
                        <h4 className=" font-semibold">Gender:</h4>
                        <p className="dark:text-gray-400 ">
                          {profile.cantidateGender}
                        </p>
                      </div>
                    </div>
                    {/* logo part */}
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
                    <h1>
                      {profile.cantidateFirstName} {profile.cantidateLastName}
                    </h1>

                    <div className="text-left">
                      <p>Hello I am jhon.I am A Developer </p>
                    </div>

                    <div className="card-actions justify-end">
                      <Link to={`/details/${profile._id}`}>
                        <button className="btn btn-primary">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}

      <div className="flex justify-center space-x-1 dark:text-gray-100 mb-10">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          title="Page 1"
          className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
        >
          1
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 2"
        >
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 3"
        >
          3
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 4"
        >
          4
        </button>
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
