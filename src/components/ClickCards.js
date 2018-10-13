import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClickCard from './ClickCard';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '960px',
    margin: '40px auto'
  }
}

const ClickCards = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container 
            spacing={24}
            direction="row"
            justify="space-around"
            alignItems="center"
      >
        {props.characters.map(character => (
          <Grid item xs={2}>
            <ClickCard character={character} 
                       shuffleCards={props.shuffleCards}
                       resetGame={props.resetGame}
                       turn={props.turn}
            />
          </Grid>
        ))}
      </Grid>
    </div> 
  ) 
}

ClickCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickCards);