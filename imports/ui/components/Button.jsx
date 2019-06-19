import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment} from '../actions/index';

class Button extends Component {

    onSubmit = () => {
        this.props.increment(1);
    }


    render() {
        return (
            <div>
                <h1>The number is: {this.props.count}</h1>
                <button onClick={this.onSubmit}>Click Me!</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { count: state.count }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({increment: increment}, dispatch)
 
  }



export default connect(mapStateToProps, mapDispatchToProps)(Button);
