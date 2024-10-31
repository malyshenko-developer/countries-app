import React, { useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Country } from '../types';
import CountryCard from './CountryCard';
import Search from './Search';

const GET_COUNTRIES = gql`
    query GetCountries($filter: CountryFilterInput) {
        countries(filter: $filter) {
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
    const { loading, error, data, refetch } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

    
    if (error) return <p>Error {error.message}</p>

    const handleSearch = (code: string) => {
        if (code === '') {
            refetch({
                filter: {}
            });
        } else {
            refetch({
                filter: {
                    code: {
                        in: code
                    }
                }
            })
        }
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            {
                loading && <p>Loading...</p>
            }
            {
                data?.countries.length === 0 ? <Typography>Список пуст</Typography> :
                    <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
                        {
                            data?.countries.map((country) => (
                                <Grid key={country.code} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <CountryCard country={country} />
                                </Grid>
                            ))
                        }
                    </Grid>
            }
        </>
    )
}

export default CountryList;