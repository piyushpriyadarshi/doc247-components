import * as React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Tabs,
    Tab,
    Divider,
} from "@mui/material";
import { useRouter } from "next/router";

export default function DateCard({ dateArray }) {
    const router = useRouter();
    const [dateSelected, setDateSelected] = React.useState(dateArray[0])
    const [dateIndexSelected, setDateIndexSelected] = React.useState(0)
    return (
        <>
            <div style={{ background: '#dceaf2', marginTop: '20px' }} >

                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        TabIndicatorProps={{
                            style: { transition: "none", display: "none" },
                        }}
                        sx={{ overflowX: "auto" }}
                        value={dateIndexSelected}
                        // allowScrollButtonsMobile
                    >
                        {dateArray.map((item, index) => (
                            <Tab
                                key={index}
                                disableRipple={false}
                                sx={{ margin: 0, padding: "0.5rem" }}
                                label={
                                    <Card
                                        sx={{ margin: 0, borderRadius: 0, padding: 1, paddingBottom: 2 }}
                                        onClick={() => {
                                            setDateSelected(item)
                                            setDateIndexSelected(index<dateArray.length-1 ? index+1:index)
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                height: { xs: 40, sm: 40 },
                                                //   width: { xs: 145, sm: 160 },
                                                padding: '0px 22px 20px 22px',
                                                background: "#fff",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    textAlign: "center",
                                                    color: "#00000",
                                                    fontSize: { xs: 12, sm: 13 },
                                                    fontWeight: 600,
                                                    paddingTop: 1,
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    textAlign: "center",
                                                    color: "green",
                                                    fontSize: { xs: 11, sm: 13 },
                                                    fontWeight: 600,
                                                    paddingTop: 1,
                                                }}
                                            >
                                                23 slots available
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                }
                            />
                        ))}
                    </Tabs>
                </Grid>
            </div>

            <Typography sx={{textAlign:'center',marginTop:'18px',fontSize:'15px',fontWeight:600}}>{dateSelected}</Typography>
            <Divider sx={{marginTop:'18px'}}/>
        </>
    );
}
