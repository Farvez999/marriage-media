import React from 'react';
import Loading from "../Shared/Loader/Loading"
import { useQuery } from '@tanstack/react-query';
import PackageCard from './PackageCard';
import PriviledgesCard from './PriviledgesCard';

const Package = () => {

    const { data: packages = [], isLoading } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/packages`)
            const data = await res.json()
            return data

        }
    })

    console.log(packages);


    const { data: priviledges = [] } = useQuery({
        queryKey: ['priviledges'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/priviledges`)
            const data = await res.json()
            return data

        }
    })

    console.log(priviledges);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-14'>
            <div>
                <h2 className='text-4xl text-center text-base text-black mb-20 font-bold underline hover:underline-offset-4 decoration-lime-500'>Online Membership Level</h2>
            </div>
            <div className='grid mt-4 ml-10 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    packages.map(pac => <PackageCard
                        key={pac._id}
                        pac={pac}
                    ></PackageCard>)
                }
            </div>

            <div className="max-w-2xl mx-auto mb-16 text-center mt-10">
                <span className="font-bold tracking-wider uppercase dark:text-violet-400">Pricing</span>
                
                <h2 className="text-4xl font-bold lg:text-4xl mt-3 underline hover:underline-offset-4 decoration-lime-500">Choose your best plan</h2>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    priviledges?.map(priviledge => <PriviledgesCard
                        key={priviledge?._id}
                        priviledge={priviledge}
                    ></PriviledgesCard>)
                }
            </div>
        </div>
    );
};

export default Package;