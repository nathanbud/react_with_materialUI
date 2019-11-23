import React from 'react'
import { Paper,Typography, List, ListItem, ListItemText } from '@material-ui/core'

export default props => {
    return(
        <Paper style = {props.styles.Paper}>
            {props.exercises.map(([group, exercises])=>
                    <Typography variant="overline" style = {{ display:'block', fontSize:20 }} key ={Math.random()* 10}>
                    {group}
                    <List component="ul" aria-label="secondary mailbox folders">
                        <ListItem button style={{display: 'block'}}>
                            {exercises.map((exercise)=>{
                               return <ListItemText primary={exercise.title} variant='h4' />
                            })}
                            
                        </ListItem>
                        
                    </List>
                    </Typography>
                    )}
        </Paper>
    )
}