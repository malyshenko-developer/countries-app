import React from 'react';
import Flag from 'react-world-flags'
import { gql, useQuery } from "@apollo/client";
import { Box } from '@mui/material';
import { Country } from '../types';

const GET_COUNTRIES = gql`
    query GetCountries {
        countries(filter: {}) {
            code
            name
            capital
            languages {
                native
            }
            emoji
            continent{
                name
            }
            phone
            currency
        }
    }
`;

const CountryList = () => {
    const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error {error.message}</p>

    return (
        <Box>
            {
                data?.countries.map((country) => (
                    <Flag code={ country.code } style={{ width: '100px', height: '70px', objectFit: 'cover' }} alt={`${country.name} flag`} />
                ))
            }
        </Box>
    )
}

export default CountryList;