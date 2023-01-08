import React from 'react';
import WorkCard from './WorkCard';
import profilePic from '../../../assets/profile.png'
import partnerPic from '../../../assets/partner.png'
import communicationPic from '../../../assets/communication.png'

const Work = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Create your profile',
            description: 'Create your profile & decide which fields (photo, name, etc.) to hide from general public',
            icon: profilePic,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Search your partner',
            description: 'Search for your preferred partner who may be located at the other side of the world',
            icon: partnerPic,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 3,
            name: 'Start communication',
            description: 'Start communicating with potential partners via mailbox, phone and other means',
            icon: communicationPic,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='mt-20'>
            <div>
                <h4 className='text-3xl text-center text-base text-fuchsia-700 font-bold'>HOW SENSIBLEMATCH WORKS</h4>
                <h4 className='text-2xl text-center text-base text-black'>Get started in 3 easy steps</h4>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <WorkCard
                        key={service.id}
                        service={service}
                    ></WorkCard>)
                }
            </div>
        </div>
    );
};

export default Work;