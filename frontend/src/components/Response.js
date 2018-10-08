import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Responce extends Component {

    propTypes = {
        data: PropTypes.string.isRequired,
    };

    render() {
        return <div>Data received: {this.props.data} </div>
    }
}

export default Responce;