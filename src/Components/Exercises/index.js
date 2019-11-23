import React from 'react'
import { Grid} from '@material-ui/core'
import RightPane from './RightPane';
import LeftPane from './LeftPane';

const style = {
    Paper: {
        padding:20,
        margin: '10 0 10 0',
        height: 500,
        overflow: 'auto'
    }
}

const Exercises = (props) =>{

    
    return(
        
        <Grid container>
            <Grid item sm>
                <LeftPane styles = {style} exercises ={props.exercises}/>
            </Grid>
            <Grid item sm>
               <RightPane styles = {style}/>
            </Grid>    
        </Grid>
    )
}

export default Exercises