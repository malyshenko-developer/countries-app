import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Country } from '../types';
import CountryCard from './CountryCard';

const GET_COUNTRIES = gql`
    query GetCountries {
        countries(filter: {}) {
            code
            name
            capital
            languages {
                native
            }
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
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {
                data?.countries.map((country) => (
                    <Grid key={country.code} size={{ xs: 12, sm: 6, md: 4 }}>
                        <CountryCard country={country} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CountryList;