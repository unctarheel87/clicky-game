import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'url("/images/chalkboard.jpg")',
    opacity: '0.9',
    width: '630px',
    height: '280px',
    margin: '0 auto',
    padding: '13px',
    display: 'flex',
    alignItems:'flex-end',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    width: '410px',
  }
}

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h5">
        Click any tile to play!<hr/>
        Click on an image to earn points, but don't click on any more than once!
      </Typography>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
