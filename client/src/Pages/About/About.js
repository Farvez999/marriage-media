import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../Pages/Shared/Loader/Loading'

function About() {
  const { data: aboutus = [], isLoading } = useQuery({
    queryKey: ['aboutus'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/aboutus`)
      const data = await res.json()
      return data

    }
  })

  console.log(aboutus);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    // <div className="about grid grid-rows-2 gap-4">
    //   <div className="left col-span-3">
    //     <div className="hero min-h-screen bg-base-200">
    //       <div className="hero-content  text-left">
    //         <div>
    //           <h1 className="text-2xl font-bold">Mission</h1>
    //           <p className="py-6">
    //             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //             a id nisi.
    //           </p>
    //         </div>

    //         <div>
    //           <h1 className="text-2xl font-bold">Vision</h1>
    //           <p className="py-6">
    //             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //             a id nisi.
    //           </p>
    //         </div>

    //         {/* <div className="hero-content text-center">
    //           <div className="max-w-md text-left">
    //             <h1 className="text-2xl font-bold">About Us</h1>
    //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

    //           </div>
    //         </div> */}
    //       </div>

    //     </div>


    //   </div>

    //   <div className="right  col-span-1">
    //     <div className="hero min-h-screen bg-base-200">
    //       <div className="hero-content text-center">
    //         <div className="max-w-lg text-left">
    //           <h1 className="text-2xl font-bold">About Us</h1>
    //           <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

    //         </div>
    //       </div>
    //     </div>

    //   </div>



    // </div>


    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-left">
      <div className="max-w-screen-lg sm:mx-auto">
        {
          aboutus.map(about =>
            <div>
              <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div className="mb-4 lg:mb-0">
                  <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                    Vision
                  </h5>
                  <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                      {about.vision}
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div className="mb-4 lg:mb-0">
                  <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                    Mission
                  </h5>
                  <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                      {about.mission}
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50">
                <div className="mb-4 lg:mb-0">
                  <h5 className="mb-4 text-xl font-bold leading-none sm:text-2xl">
                    About us
                  </h5>
                  <div className="relative pr-8">
                    <p className="text-base text-gray-700 md:text-lg">
                    {about.about}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )
        }

      </div>
    </div>



  );
}

export default About