import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '120px',
    height: '105px',
    cursor: 'pointer',
    border: '4px solid lightgray'
  },
  imgCard: {
    width: '100%',
    height: '100%',
  }
});

class ClickCard extends Component {
  state = {
    elevationVal: 2
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={3} >
        <Paper className={classes.paper} 
              elevation = { this.state.elevationVal }
              onMouseOver={() => {
                this.setState({ elevationVal: 20 })
              }}
              onMouseOut={() => {
                this.setState({ elevationVal: 2 })
              }}
              onClick={() => {
                  if(this.props.disableClick) {
                    return false
                  }
                  if(this.props.character.hasClicked) {
                    this.props.resetGame()
                    return
                  } 
                  this.setState({ hasClicked: true })
                  this.props.turn(this.props.character._id) 
              }}
          >
          <img className={classes.imgCard} 
              alt={this.props.character.image} 
              src={`/images/${this.props.character.image}`} 
        />
        </Paper>
      </Grid>
    );
  }
}

ClickCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickCard);
