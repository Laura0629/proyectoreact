import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  altura: {
    paddingTop: 80,
    textGrande:{
      fontSize:80,
    }
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className={classes.altura}>
        <Typography component="div" style={{ backgroundColor: '#c0c0c0', height: '100vh' }}>

          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>

                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" fullWidth label="Ingrese un valor" className={classes.textGrande} variant="outlined" />
                  </form>


                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secundary">
                    AccccccC
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    CE
                  </Button>

                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    %
                  </Button>

                </Paper>
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secundary">
                    7
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="secundary">
                    8
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="">
                    9
                  </Button>

                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <Button variant="outlined" color="primary">
                    *
                  </Button>

                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>

                  <Button variant="outlined" color="primary">
                    /
                  </Button>
                </Paper>
              </Grid>





            </Grid>
          </div>
        </Typography>

      </Container>
    </React.Fragment>
  );
}

export default App;
