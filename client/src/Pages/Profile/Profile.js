import React from 'react'


function Profile() {
  return (
    <>
    <div className="min-h-screen bg-base-200 bg-cover blur-sm h-10 w 80 relative "
      style={{ backgroundImage: `url("https://sensiblematch.com/static/media/marriage-2x.59c58c28.webp")` }}>
      {/* <img className='blur-sm bg-cover ' src="https://sensiblematch.com/static/media/marriage-2x.59c58c28.webp" alt="" /> */}
      
       
         <div className="text-center lg:text-center bg-base-800 justify-items-center ">
         <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Matrimonial Profile</h1>
         
        </div>

    
    </div>

    
    
    
    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
			<span className="text-sm dark:text-gray-400">General manager</span>
		</div>
        <div className="desc grid grid-cols-2 text-left ">
            <div className="left">
            <div className="flex gap-2 ">
				<h4 className=" font-semibold">Age:</h4>
				<p className="dark:text-gray-400 ">22</p>
			</div>
            <div className="flex gap-2 ">
				<h4 className=" font-semibold">Gender:</h4>
				<p className="dark:text-gray-400"></p>
			</div>
            <div className="flex  gap-2">
				<h4 className=" font-semibold">Height:</h4>
				<p className="dark:text-gray-400"></p>
			</div>

            </div>
       
            <div className="right">
            <div className="flex gap-2">
				<h4 className=" font-semibold">City:</h4>
				<p className="dark:text-gray-400">New York</p>
			</div>
            <div className="flex gap-2">
				<h4 className=" font-semibold">Country:</h4>
				<p className="dark:text-gray-400"></p>
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
{/* <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="dark:text-violet-400">senectus</span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem/></br>
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
			</div>
		</div>
	</div>
</section> */}


</>
   
  )
}

export default Profile