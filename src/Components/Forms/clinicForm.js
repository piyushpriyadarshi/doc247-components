import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Card, CardContent, Typography, FormControl } from '@mui/material';

export default function ClinicForm() {
    return (
        <Box sx={{marginTop:3}}>
            <Grid item xs={12}>
                <Card>
                    <Grid sx={{ margin: 2 }} >
                        <Grid style={{ width: '100%' }}>
                            <FormControl fullWidth={true}>
                                <TextField
                                    id="clinicname"
                                    label="Clinic/Hospotal Name"
                                    variant="standard"
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid sx={{ width: '100%', marginTop: 3 }}>
                            <FormControl fullWidth={true}>
                                <TextField
                                    id="standard-full-width"
                                    label="Address"
                                    variant="standard"
                                    required
                                    type='number'
                                />
                            </FormControl>
                        </Grid>
                        <Grid sx={{ width: '100%', marginTop: 3 }}>
                            <FormControl fullWidth={true}>
                                <TextField
                                    id="standard-full-width"
                                    label="Description"
                                    variant="standard"
                                    required
                                    multiLine={true}
                                    rows={3}
                                />
                            </FormControl>
                        </Grid>
                        <Grid sx={{ width: '100%', marginTop: 3 }}>
                            <FormControl fullWidth={true}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Clinic Images</FormLabel>
                                <TextField
                                    id="standard-full-width"
                                    variant="standard"
                                    required
                                    type='file'
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Box>
    );
}