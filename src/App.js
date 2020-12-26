import React, { useEffect, useState, Fragment } from "react";
import './App.css';
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
import { getMatches } from "./api/Api";
import { Grid } from "@material-ui/core";
import { Typography } from '@material-ui/core';
function App() {
  
  const [matches,setMatches]=useState([]);
  useEffect(
    () => { 
      getMatches()
      // storing the data into matches
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches)
      })
      .catch((error)=>alert('Could Not Load Data')); 
     }
    , []);

  return (
    <div className="App">
      <Navbar />
      <Typography variant='h3' style={{marginTop:20}}>Welcome to CricLive App</Typography>
      <Grid container>
        <Grid sm="1"></Grid>
        <Grid sm="10">
        {
        matches.map((match)=>(
          <Fragment>
          {match.type=='Twenty20'?
          (<MyCard key={match.unique_id} match={match} />)
          :
          ("")
          }
          </Fragment>
        ))
      }
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
