import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Button, Input} from "antd";

class TodoListUI extends Component {

    render() {
        return (
            <div>
                <Input
                    value={this.props.inputValue}
                    style={{"width": "300px"}}
                    onChange={this.props.handleInputOnChange}
                />
                <Button onClick={this.props.handleBtnClick}>确定</Button>
                {
                    this.props.list.map((res, idx) => {
                        return (
                            <div key={res} onClick={() => {
                                this.props.handleItemClick(idx)
                            }}>{res}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoListUI;
