import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClickCard from './ClickCard';
import Grid from '@material-ui/core/Grid';
import './ClickCards.css'

const styles = {
  root: {
    width: '680px',
    margin: '5% auto'
  }
}

class ClickCards extends Component {
  state= {}
  myRef= {}
  componentWillReceiveProps() {
    for(let key in this.myRef) {
      const domNode = ReactDOM.findDOMNode(this.myRef[key]);
      const boundingBox = domNode.getBoundingClientRect();
      this.setState({
        [key]: boundingBox
      });
    }
  }

  componentDidUpdate() {
      for(let key in this.myRef) {
        const domNode = ReactDOM.findDOMNode(this.myRef[key]);
        const newBox = domNode.getBoundingClientRect();
        const oldBox = this.state[key];
      
        const deltaX = oldBox.left - newBox.left; 
        const deltaY = oldBox.top  - newBox.top;
        //animate
        requestAnimationFrame( () => {
        domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        domNode.style.transition = 'transform 0s';  
          requestAnimationFrame( () => {
            domNode.style.transform  = '';
            domNode.style.transition = 'transform 500ms';
          });
      });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container 
              spacing={24}
              direction="row"
              justify="space-around"
              alignItems="center"
              className={this.props.error}
        >
          {this.props.characters.map((character) => (
            <ClickCard ref={(ref) => this.myRef[character._id] = ref}
                       key={character._id}
                       character={character} 
                       resetGame={this.props.resetGame}
                       turn={this.props.turn}
            />
          ))}
        </Grid>
      </div> 
    ) 
  }
}

ClickCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickCards);
