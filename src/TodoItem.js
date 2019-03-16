import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }

    handleClick() {
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount() {
        console.log('child:componentWillUnmount');
    }

}

TodoItem.propTypes = {
    test: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default  TodoItem;