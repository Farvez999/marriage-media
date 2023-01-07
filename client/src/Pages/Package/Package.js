import React from 'react';
import Loading from "../Shared/Loader/Loading"
import { useQuery } from '@tanstack/react-query';
import PackageCard from './PackageCard';

const Package = () => {

    const { data: packages = [], isLoading } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/packages`)
            const data = await res.json()
            return data

        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-14'>
            <div>
                <h2 className='text-4xl text-center text-base text-black'>Online Membership Level</h2>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    packages.map(pac => <PackageCard
                        key={pac._id}
                        pac={pac}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Package;