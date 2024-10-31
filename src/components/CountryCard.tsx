import { Box, Card, CardContent, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import React from 'react'
import { Country } from '../types';
import Flag from 'react-world-flags';
import InfoItem from './InfoItem';

interface Props {
    country: Country;
}

const CountryCard = ({ country } : Props) => {
  return (
    <Card variant='outlined'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
    >
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
            }}
        >
            <Box display={'flex'} justifyContent={'space-between'} mb={'20px'} flexWrap={'wrap'}>
                <Box display={'flex'} gap={'15px'} alignItems={'center'}>
                    <Flag
                        code={ country.code }
                        style={{ width: '60px', height: '30px', objectFit: 'cover' }}
                        alt={`${country.name} flag`}
                    />
                    <Box>
                        <Typography component={'h2'} fontSize={'18px'}>
                            { country.name }
                        </Typography>
                        <Typography>
                            { country.capital }
                        </Typography>
                    </Box>
                </Box>
                <Typography>
                    { country.continent.name }
                </Typography>   
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={'10px'}>
                <InfoItem
                    label={country.phone}
                    icon={<PhoneIcon />}
                />
                <InfoItem
                    label={country.currency}
                    icon={<AttachMoneyIcon />}
                />
                <InfoItem
                    label={country.languages.map(lang => lang.native).join(', ')}
                    icon={<RecordVoiceOverIcon />}
                />
            </Box>
        </CardContent>
    </Card>
  )
}

export default CountryCard;