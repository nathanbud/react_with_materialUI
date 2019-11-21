import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import RightPane from './RightPane';
import LeftPane from './LeftPane';

const style = {
    Paper: {
        padding:20,
        margin: '10 0 10 0',

    }
}

const Exercises = () =>{


    return(
        <Grid container>
            <Grid item sm>
                <LeftPane styles = {style}/>
            </Grid>
            <Grid item sm>
               <RightPane styles = {style}/>
            </Grid>
           

        </Grid>
    )
}

export default Exercises