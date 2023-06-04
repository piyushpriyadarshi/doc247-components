import { useRouter } from 'next/router';
import { useState } from 'react';
import { Typography, Box, Divider, Button, TextField, Card, CardContent, Radio } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
const Confirmation = (props) => {
  const [selectedPayValue, setSelectedPayValue] = useState('a');
  const [selectedUserValue, setSelectedUserValue] = useState('myself');

  const handleChange = (value) => {
    setSelectedPayValue(value);
  };
  const handleUserClick = (value) => {
    setSelectedUserValue(value);
  };
  const router = useRouter();
  return (
    <>
      <Box sx={{ display: 'flex', margin: '16px 12px 0px 12px' }}>
        <img
          src='https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000'
          style={{ width: '40px', height: '40px', borderRadius: '35px' }}
        >
        </img>
        <span style={{ margin: '0px 12px 0px 12px' }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>Dr. Rashmi</Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>Domlur, Dental De Care</Typography>
        </span>
      </Box>
      <Divider sx={{ marginTop: '10px', height: '5px', borderColor: '#e7ecf0' }} />
      <Typography sx={{ fontSize: '14px', fontWeight: 500, margin: '20px 12px 0px 12px' }}>Appointment date and shift</Typography>
      <Typography sx={{ fontSize: '12px', fontWeight: 400, margin: '5px 12px 0px 12px' }}>Today, Evening</Typography>
      <Divider sx={{ marginTop: '10px', height: '5px', borderColor: '#e7ecf0' }} />
      <Typography sx={{ fontSize: '12px', fontWeight: 400, margin: '15px 12px 0px 12px', background: '#f6ebdd', padding: 1 }}>Free cancellation until 01 june morning</Typography>
      <Divider sx={{ marginTop: '2px', height: '20px', borderBottomWidth: 'thick', borderColor: '#dceaf2' }} />
      <Box sx={{ margin: '0px 12px 0px 12px' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 500, marginTop: '20px' }}>This appointment is for:</Typography>
        <Card
          sx={{ height: 50, marginTop: '10px', borderRadius: 0, cursor: 'pointer', padding: 0 }}
          onClick={() => handleUserClick('myself')}
        >
          <CardContent sx={{ height: 20, display: 'flex' }}>
            <Radio
              checked={selectedUserValue === 'myself'}
              value="myself"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>Myself</Typography>

          </CardContent>
        </Card>
        <Card
          sx={{ height: 50, marginTop: '0px', borderRadius: 0, cursor: 'pointer' }}
          onClick={() => handleUserClick('someone')}
        >
          <CardContent sx={{ height: 30, display: 'flex' }}>
            <Radio
              checked={selectedUserValue === 'someone'}
              value="someone"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>Someone else</Typography>

          </CardContent>
        </Card>
      </Box>
      {selectedUserValue != 'myself' &&
        <Box>
          <Typography sx={{ fontSize: '14px', fontWeight: 500, margin: '12px 12px 0px 12px' }}>Please provide following information:</Typography>
          <TextField sx={{ display: 'grid', margin: '0px 12px 0px 12px', width: '100%' }} label="Patient's Name" variant="standard" />
          <TextField sx={{ display: 'grid', margin: '0px 12px 0px 12px' }} label="Patient's Mobile" variant="standard" />
          <TextField sx={{ display: 'grid', margin: '0px 12px 0px 12px' }} label="Patient's email" variant="standard" />
          <Divider sx={{ marginTop: '10px', height: '20px', borderBottomWidth: 'thick', borderColor: '#e7ecf0' }} />
        </Box>}

      <Box sx={{ margin: '10px 12px 0px 12px' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 500, marginTop: '20px' }}>When would you like to pay?</Typography>
        <Card
          sx={{ height: 60, marginTop: '10px', borderRadius: 0, cursor: 'pointer' }}
          onClick={() => handleChange('a')}
        >
          <CardContent sx={{ height: 30, display: 'flex' }}>
            <Radio
              checked={selectedPayValue === 'a'}
              value="a"
              name="radio-buttons"
              sx={{ marginTop: '8px' }}
              inputProps={{ 'aria-label': 'A' }}
            />
            <span>
              <Typography sx={{ fontSize: '12px', fontWeight: 400 }}> rs. 300</Typography>
              <Typography sx={{ fontSize: '12px', fontWeight: 400 }}> pay online</Typography>
            </span>

          </CardContent>
        </Card>
        <Card
          sx={{ height: 60, marginTop: '0px', borderRadius: 0, cursor: 'pointer' }}
          onClick={() => handleChange('b')}
        >
          <CardContent sx={{ height: 30, display: 'flex' }}>
            <Radio
              checked={selectedPayValue === 'b'}
              value="b"
              name="radio-buttons"
              sx={{ marginTop: '8px' }}
              inputProps={{ 'aria-label': 'A' }}
            />
            <span>
              <Typography sx={{ fontSize: '12px', fontWeight: 400 }}> rs. 300</Typography>
              <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>pay later at clinic</Typography>
            </span>

          </CardContent>
        </Card>
      </Box>
      <Divider sx={{ marginTop: '10px', height: '20px', borderBottomWidth: 'thick', borderColor: '#e7ecf0' }} />
      <Box>
        <Typography sx={{ fontSize: '15px', fontWeight: 500, margin: '12px 12px 0px 12px' }}>cancellation policy</Typography>
        <span style={{ display: 'flex' }}>
          <Typography sx={{ color: '#5bbadf', marginLeft: '12px', marginTop: '10px', fontSize: '20px' }}>
            <AccessTimeIcon sx={{}} />
          </Typography>

          <Typography sx={{ fontSize: '14px', fontWeight: 400, margin: '5px 12px 0px 12px' }}>If you wish to cancel or reschedule, you can do it upto 2 hours before the appointment time</Typography>
        </span>
        <span style={{ display: 'flex' }}>
          <Typography sx={{ color: '#5bbadf', marginLeft: '12px', marginTop: '10px' }}>
            <CurrencyRupeeIcon sx={{}} />
          </Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: 400, margin: '5px 12px 0px 12px' }}>You will be charged Rs 50 cancellation fee if you cancel within 2 hours of your appointment time or absent</Typography>
        </span>
        <span style={{ display: 'flex' }}>
          <Typography sx={{ color: '#5bbadf', marginLeft: '12px', marginTop: '10px' }}>
            <SentimentSatisfiedAltIcon sx={{}} />
          </Typography>
          <Typography sx={{ fontSize: '14px', fontWeight: 400, margin: '5px 12px 0px 12px' }}>However, in the event of doctor no show, you will not be charged a cancellation fee</Typography>
        </span>
      </Box>
      <Divider sx={{ marginTop: '10px', height: '20px', borderBottomWidth: 'thick', borderColor: '#e7ecf0' }} />
      <Button variant="contained" sx={{ background: '#bcbaba', color: '#fff', width: '90%', marginLeft: '5%', borderRadius: "4px", marginTop: '12px' }}>confirm clinic visit</Button>
      <Typography sx={{ fontSize: '12px', fontWeight: 400, margin: '12px 12px 0px 12px' }}>1.Updates will be sent to +918871967069</Typography>
      <Typography sx={{ fontSize: '12px', fontWeight: 400, margin: '5px 12px 0px 12px' }}>By booking this appointment, you agree to Doc247's <a style={{ fontSize: '12px', fontWeight: 600, color: '#5bbadf' }} href="">Terms and Conditions</a>. You can also Pre-pay for this appointment by selecting Pay Online option. You can read our <a style={{ fontSize: '12px', fontWeight: 600, color: '#5bbadf' }} href="">payment FAQs</a>.</Typography>
    </>
  )
}
Confirmation.layout = IndividualPageLayout;
Confirmation.metaData = {
title: "Confirmation",
};
export default Confirmation;