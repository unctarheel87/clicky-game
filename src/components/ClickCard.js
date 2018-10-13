import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '110px',
    height: '100px',
    cursor: 'pointer',
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
      <Paper className={classes.paper} 
             elevation = { this.state.elevationVal }
             onMouseOver={() => {
              this.setState({ elevationVal: 20 })
             }}
             onMouseOut={() => {
              this.setState({ elevationVal: 2 })
             }}
             onClick={() => {
                if(this.state.hasClicked) {
                  return this.props.resetGame()
                } 
                this.setState({ hasClicked: true })
                this.props.turn(this.props.id) 
                this.props.shuffleCards()
             }}
        >
        <img className={classes.imgCard} 
            alt={this.props.character.image} 
            src={`/images/${this.props.character.image}`} 
      />
      </Paper>
    );
  }
}

ClickCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickCard);
