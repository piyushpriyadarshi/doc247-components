import { useRouter } from 'next/router';
import { GetDates } from '../../../../../utils/CustomFunctions'
import DateCards from '../../../../../Components/DateCards'
import { Typography, Box, Divider, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import HomeIcon from '@mui/icons-material/Home';
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
const Booking = (props) => {
    const router = useRouter();
    const handleOnVisit = (item) => {
      router.push({
        pathname: `/confirmation`,
        // query: { name: item.name }
      })
    }
    const dateArray = GetDates(7);
    return (
        <>
            <span style={{ display: 'flex' }}>
                <Typography sx={{ marginLeft: '12px' }}><HomeIcon sx={{ fontSize: '30px', color: '#6ea6c5' }} /></Typography>
                <Typography sx={{ marginLeft: '6px', fontSize: '20px', fontWeight: 500 }}>Clinic Visit Slots</Typography>
            </span>
            <Box sx={{ display: 'flex', marginLeft: '12px', marginTop: '12px' }}>
                <img
                    src='https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000'
                    style={{ width: '60px', height: '60px', borderRadius: '35px' }}
                >
                </img>
                <span style={{ marginLeft: '10px', marginTop: '7px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>Dr. {router.query.name}</Typography>
                    <Typography sx={{ fontSize: '15px', fontWeight: 400 }}>Domlur, Dental De Care</Typography>
                </span>
            </Box>
            <Divider sx={{ marginTop: '10px', height: '20px', borderBottomWidth: 'thick', borderColor: '#dceaf2' }} />
            <Typography sx={{ fontSize: '15px', fontWeight: 500, marginTop: '20px', marginLeft: '12px' }}>Select a time slot for in-clinic appointment:</Typography>
            <span style={{ display: 'flex' }}>
                <Typography sx={{ marginLeft: '12px', marginTop: '5px' }}><CheckIcon sx={{ fontSize: '20px', color: 'green' }} /></Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, marginLeft: '6px', marginTop: '5px' }}>Get instant confirmation for free</Typography>
            </span>
            <DateCards dateArray={dateArray} />

            <span style={{ marginLeft: '10px', marginTop: '37px', display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" onClick={() => handleOnVisit()} sx={{ backgroundColor: '#dceaf2', borderRadius: 0 }}>Morning</Button>
                <Button variant="contained" onClick={() => handleOnVisit()} sx={{ backgroundColor: '#dceaf2', borderRadius: 0 }}>afternoon</Button>
                <Button variant="contained" onClick={() => handleOnVisit()} sx={{ backgroundColor: '#dceaf2', borderRadius: 0 }}>evening</Button>
            </span>
        </>
    )
}
Booking.layout = IndividualPageLayout;
Booking.metaData = {
title: "Select time slot",
};
export default Booking