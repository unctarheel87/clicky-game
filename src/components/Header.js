import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import typeWriter from '../typewriter';

const styles = {
  root: {
    background: 'url("/images/chalkboard.jpg")',
    opacity: '0.9',
    width: '630px',
    height: '250px',
    margin: '0 auto',
    paddingTop: '40px',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: '4px'
  },
  text: {
    color: '#fff',
    width: '400px',
    textTransform: 'uppercase'
  }
}

class Header extends Component {
  myRef = React.createRef()
  componentDidMount() {
    typeWriter(this.myRef.current)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.text} variant="h5">
          <p ref={this.myRef} id='headerText'></p>
        </Typography>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
