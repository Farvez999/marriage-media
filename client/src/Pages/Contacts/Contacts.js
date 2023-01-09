import React from 'react';

const Contacts = () => {
    return (
        <div className='my-6'>
            {/* <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map> */}


            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <div className="card-body max-w-4xl mx-auto">
                        <form >

                            {/* Your Name */}
                            <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="YFirst Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" className="input input-bordered" />
                                </div>

                            </div>

                            {/* Email and Phone */}
                            <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number" className="input input-bordered" />
                                </div>

                            </div>

                            {/* Subject */}
                            <div className="grid lg:grid-cols-1 md:grid-1 sm:grid-1 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                </div>

                            </div>

                            {/* Message */}
                            <div className="grid lg:grid-cols-1 md:grid-1 sm:grid-1 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea h-24 textarea-bordered" placeholder="Write your message"></textarea>
                                </div>

                            </div>

                            {/* Submit */}
                            <div className='my-4'>
                                <input className='btn btn-accent text-white' value="Submit" type="submit" />
                                {/* {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            } */}

                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="md:py-0 md:px-6 my-16 border-2 p-2 ml-4">
                        <h1 className="text-4xl font-bold text-left">Contacts</h1>
                        <p className="pt-2 pb-4 text-left">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span className='text-left'>Suite No: 9/38 (8th Floor), <br></br>
                                    Eastern Plaza, Hatirpool,<br></br>
                                    Dhaka 1205</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+88-0175-3836811 / +88-0177-0204544</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 mb-8">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span className='mb-8'>support1@sensiblematch.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contacts;
// export default GoogleApiWrapper({
//     apiKey: ('YOUR_GOOGLE_API_KEY_GOES_HERE')
// })(Contacts)