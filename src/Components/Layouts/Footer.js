import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({

    root: {
      flexGrow: 1,
      backgroundColor:"red",
    },
  });

const Footer = (props) =>{


  const classes = useStyles();
 

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

    return(
        <Paper className={classes.root}>
             
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
            <Tab label="All"  />
       { props.muscles.map((group)=>
            <Tab label={group} key={Math.random() * 10}/>
        )}
         
          
        </Tabs>
      </Paper>
    )
}

export default Footer