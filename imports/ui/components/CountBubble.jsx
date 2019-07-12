import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class CountBubble extends React.Component {

    render() {

        return (
            <div className="count-bubble">
                { this.props.count >= 99 ? "99+" : this.props.count }
            </div>
        );
    }
}

export default CountBubble;