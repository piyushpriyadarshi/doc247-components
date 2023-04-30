import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CircularCard({ cardsArray, cardHeading, cardSubHeading }) {
    return (
        <>
            <Typography sx={{ fontSize: { xs: 13, sm: 20 }, fontWeight: 600, paddingTop: 3, marginLeft:1}}>{cardHeading}</Typography>
            {cardSubHeading && <Typography sx={{ fontSize: { xs: 11, sm: 13 }, fontWeight: 400 , marginLeft:1}}>{cardSubHeading}</Typography>}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cardsArray.map((item, ind) => {
                    return (
                        <div>
                            <Card sx={{ margin: 2, width: { xs: 45, sm: 70 }, borderRadius: { xs: 20, sm: 40 } }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt="green iguana"
                                        sx={{ height: { xs: 45, sm: 70 } }}
                                    />
                                </CardActionArea>
                            </Card>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: 8, sm: 11 }, fontWeight: 600, paddingTop: 0 }} >
                                {item.name}
                            </Typography>
                        </div>
                    )
                })}
            </div>
           {cardSubHeading && <Box textAlign='center' marginTop={2}>
            <Button sx={{width:{ xs: 300, sm: 600 }}} variant="outlined">View All Symptoms</Button>
            </Box>}
        </>
    );
}