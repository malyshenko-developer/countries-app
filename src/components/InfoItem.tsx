import { Box, Typography } from '@mui/material';
import React from 'react'

interface Props {
    icon: React.ReactNode;
    label: string;
}

const InfoItem = ({ icon, label }: Props) => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={'5px'}>
        { icon }
        <Typography>
            { label }
        </Typography>
    </Box>
  )
}

export default InfoItem;