import React from 'react'
import { Paper, Typography } from '@material-ui/core'

export default ({styles}) => {
    return(
       <Paper style ={styles.Paper}>  
          <Typography variant='h2'>
              Welcome!
          </Typography>
          <Typography variant='body1'>
            Please Select an exercise from the Left.
          </Typography>
       </Paper>
    )
}