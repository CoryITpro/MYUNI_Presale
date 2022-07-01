import abi from "../helpers/busd.json";
import mainabi from "../helpers/contact.json";

import { GetContract } from "../helpers/Contract";
import * as React from "react";
import { useState, useEffect } from "react";

import { ethers } from "ethers";

import busdLogo from "../assets/images/BUSD.png";

import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

function Main(props) {
    return (
        <Box sx={{ maxWidth: "1200px", m: "auto" }}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ m: 5 }} className="mCard">
                        <CardContent>
                            <Typography variant="h5" gutterBottom component="div" sx={{ borderBottom: "solid 6px", pb: 1 }}>
                                Pre-sale Information
                            </Typography>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Token Rate:
                                </Typography>
                                <Typography variant="h6" component="span">
                                    0.0001 BUSD
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Hardcap:
                                </Typography>
                                <Typography variant="h6" component="span">
                                    200 000 BUSD
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Buy min:
                                </Typography>
                                <Typography variant="h6" component="span">
                                    100
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Buy max:
                                </Typography>
                                <Typography variant="h6" component="span">
                                    1000
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Start
                                </Typography>
                                <Typography variant="h6" component="span">
                                    2022-07-01 00:00:00(UTC)
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    End
                                </Typography>
                                <Typography variant="h6" component="span">
                                    2022-07-04 00:00:00(UTC)
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ m: 5 }} className="mCard">
                        <CardContent>
                            <Typography variant="h5" gutterBottom component="div" sx={{ borderBottom: "solid 6px", pb: 1 }}>
                                Pre-sale Status
                            </Typography>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Raised Amount
                                </Typography>
                                <Typography variant="h6" component="span">
                                    0 BUSD
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Sold Amount
                                </Typography>
                                <Typography variant="h6" component="span">
                                    0 MYUNI
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ m: 5 }} className="mCard">
                        <CardContent>
                            <Typography variant="h5" gutterBottom component="div" sx={{ borderBottom: "solid 6px", pb: 1 }}>
                                Buyer Information
                            </Typography>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    Invested
                                </Typography>
                                <Typography variant="h6" component="span">
                                    0 BUSD
                                </Typography>
                            </Box>
                            <Box className="spaceBetween">
                                <Typography variant="h6" component="span">
                                    MYUNI Amount
                                </Typography>
                                <Typography variant="h6" component="span">
                                    0 MYUNI
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ m: 5 }} className="mCard">
                        <CardContent>
                            <img src={busdLogo} alt="BUSD" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Main;
