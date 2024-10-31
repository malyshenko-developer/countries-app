import { TextField } from '@mui/material';
import React, { useState } from 'react'

interface Props {
    onSearch: (code: string) => void;
}

const Search = ({ onSearch }: Props) => {
    const [ code, setCode ] = useState('');

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentCode = e.target.value.toUpperCase();

        setCode(currentCode);
        onSearch(currentCode);
    }

    return (
        <TextField
            label={'Search by country code'}
            sx={{ mb: '20px' }}
            size='small'
            onChange={handleChangeSearch}
            value={code}
        />
    )
}

export default Search;