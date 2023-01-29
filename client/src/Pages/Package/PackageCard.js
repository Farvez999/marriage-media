import React from 'react';

const PackageCard = ({ pac }) => {
    console.log(pac);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl  bg-slate-200 font-semibold">
                <figure className="px-10 pt-10">
                    <img src={pac?.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{pac?.title}</h2>
                    <p>{pac?.description}</p>
                    <p>Tk {pac?.price}</p>
                </div>
            </div>

            
        </div>
    );
};

export default PackageCard;