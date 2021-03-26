import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { PinDropSharp } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


function Ejemplo() {

  const classes = useStyles();
  return (
    <div>
      <Container fixed>
        {props.valorComparar}
        {clics === props.valorComparar ?<Alert severity="success">Usted llego a {clics}!</Alert> : ''}
      <Button

      onClick={() => setClics(clics + 1)}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        {props.nombreBoton} {clics}
      </Button>
      </Container>
    </div>

  );

}

export default Ejemplo;