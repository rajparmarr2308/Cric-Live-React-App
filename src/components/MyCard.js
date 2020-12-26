import { Button, Card, CardActions, CardContent, Dialog,DialogTitle,DialogContentText,DialogContent, DialogActions, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react'
import { getMatches, getMatchdetail } from '../api/Api'

import img from "../img/vs.png";


export default function MyCard({ match }) {
    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);



    const handleClick = (id) => {
        getMatchdetail(id)
            .then(data => {
                console.log("match data", data);
                setDetail(data);
                handleOpen();

            })

            .catch(error => console.log(error));

    };
    const getMatchCart = () => {
        return (
            <Card style={{ marginTop: 30 }}>
                <CardContent>
                    <Grid container justify="center" alignItems='center' spacing="4" style={{ marginBottom: 1 }}>
                        <Grid item>
                            <Typography variant='h5'>{match['team-1']}  </Typography>
                        </Grid>
                        <Grid item>

                            <img style={{ width: 85 }} src={img} alt="" />
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>{match['team-2']}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions >
                    <Grid container justify='center' spacing='3' style={{ marginBottom: 1 }}>
                        <Button onClick={() => {
                            handleClick(match.unique_id);
                        }} item variant="contained" color="primary">
                            Show Details
        </Button>
                        <Button style={{ marginLeft: 5 }} item variant="contained" color="primary">
                            Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );

    };
    const handleClose=()=>{
        setOpen(false);
    };
    const handleOpen=()=>{
setOpen(true);
    };
    const getDialog = () => (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id='alert-dialog-title' >{'Match detail..'}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    {/* <Typography>{detail.stat}</Typography> */}
                    <Typography>
                        Match <span style={{ fontStyle: "italic", fontWeight: "bold" }}>{detail.matchStarted ? "Started" : "Still not started"}</span>
                    </Typography>
                    <Typography>
                        Score <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>

            </DialogContent>
            <DialogActions>

                <Button onClick={handleClose} color="primary" autoFocus>
                    close
                </Button>
            </DialogActions>
        </Dialog>
    );  
    return(
        <Fragment>
         {getMatchCart()}
         {getDialog()}
         </Fragment>

    );
}
