import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Privacy = () => {
    return (
        <div className='mx-32'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ height: 592, width: 400 }} src="https://sensiblematch.com/static/media/220-SM451149.a44e4148.jpg" />
                    <div className='text-left'>
                        <div>
                            <h1 className="text-2xl">Your Privacy Matters</h1>
                            <p className="py-6">Bangladesh has embraced the digital world. However, we still have doubts in our minds about using online services to find the perfect match for marriage.</p>

                            <h1> ➔ Bangladesh has embraced.</h1>
                            <p className=""> ➔ Is it ok to post my information online? If I do, what will others think?</p>
                            <p className=""> ➔ Should I post my photo online, and make it available for anyone to view?</p>
                            <p className=""> ➔ I want to find a match for my daughter/son, niece/nephew. Is this site the right platform for that?</p>
                            <p className="py-2">These are valid concerns with any matrimonial service online. However, we thought of the solutions already!</p>

                            <button className="btn btn-outline bg-green-500 py-4">Get Started</button>
                        </div>

                        <div className='mt-4'>
                            <h1 className="text-2xl">Your Privacy Matters</h1>
                            <p className="py-6">Bangladesh has embraced the digital world. However, we still have doubts in our minds about using online services to find the perfect match for marriage.</p>

                            <h1> ➔ Bangladesh has embraced.</h1>
                            <p className=""> ➔ Is it ok to post my information online? If I do, what will others think?</p>
                            <p className=""> ➔ Should I post my photo online, and make it available for anyone to view?</p>
                            <p className="py-2"> ➔ I want to find a match for my daughter/son, niece/nephew. Is this site the right platform for that?</p>


                            <button className="btn btn-outline bg-green-500 py-4">Get Started</button>
                        </div>

                    </div>
                </div>
            </div>
            <p className="text-left ml-4 mt-4 mb-4">SensibleMatch.com is the most trusted matrimonial website in Bangladesh. Quietly making happy marriages possible among brides and grooms located around the world. We care about your privacy and we take every step possible to protect it. We have our office in Dhaka where our matchmakers are working hard to provide dedicated & personalized services to find the most suitable bride or groom for you. If you are busy, and do not have a lot of time to find the perfect match for you, our matchmakers are available to help. We are the 'marriage media' of the digital era.</p>
        </div>
    );
};

export default Privacy;