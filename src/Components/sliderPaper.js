import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function SliderPaper({ label1, label2 }) {
    return (
        <>
            <div style={{ background: '#383888f5' }}>
                <Paper sx={{ background: '#5a4bb9e3', borderRadius: 6, margin: "0 10px 0 10px",paddingTop:1 }} elevation={3}>
                    <Typography sx={{ color: '#fff', marginLeft: 2, fontSize: { xs: 12, sm: 17 } }}>
                        {label1}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: '#fff', marginLeft: 2, fontSize: { xs: 12, sm: 17 } }}>
                        {label2}
                    </Typography >
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#fff', marginLeft: "16px", margin: 2, fontSize: { xs: 12, sm: 17 } }}>All insurance accepted & no Cost EMI available</Typography>
                        <Button sx={{ fontSize: { xs: 8, sm: 15 }, fontWeight: 600, marginLeft: 2, margin: 2 }} variant="contained">Book Appointment</Button>
                    </span>
                </Paper>
            </div>
        </>
    );
}