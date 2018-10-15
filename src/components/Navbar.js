import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  }
};

const ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" color="secondary" className={classes.grow}>
            The Simpsons Shuffle Game!
          </Typography>
          <Typography variant="h5" color="secondary" className={classes.grow}>
            {props.state.message}
          </Typography>
          <Typography variant="h5" color="secondary" className={classes.grow}>
            Score: {props.state.score} | Top Score: {props.state.topScore}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
