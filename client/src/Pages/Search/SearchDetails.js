import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SearchDetails = () => {

    const { _id,cantidateFirstName, cantidateLastName,cantidateAge,cantidateHeight,cantidateGender,cantidateMaritalStatus,cantidateCountry,cantidateProfession,cantidateEducation,cantidateRelationCandidate,yourFirstName,yourLastName,phone ,email} = useLoaderData();
    const { user } = useContext(AuthContext);

    console.log(cantidateCountry);

    return (
        <div>
            <h1>Hello Details</h1>
        </div>
    );
};

export default SearchDetails;