import React from 'react';

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