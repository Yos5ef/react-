import React, { Component } from 'react';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDelItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoListTwo extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(store.getState());
        this.handleInputOnChange  = this.handleInputOnChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return <TodoListUI
            inputValue={this.state.inputValue}
            handleInputOnChange={this.handleInputOnChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemClick={this.handleItemClick}
        />
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleInputOnChange(e) {
        store.dispatch(getInputChangeAction(e.target.value));
    }

    handleBtnClick() {
        store.dispatch(getAddItemAction());
    }

    handleItemClick(idx) {
        store.dispatch(getDelItemAction(idx))
    }
}

export default TodoListTwo;


// {/*<Input*/}
// {/*value={this.state.inputValue}*/}
// {/*style={{"width": "300px"}}*/}
// {/*onChange={this.handleInputOnChange}*/}
// {/*/>*/}
// {/*<Button onClick={this.handleBtnClick}>确定</Button>*/}
// {/*{*/}
// {/*this.state.list.map((res, idx) => {*/}
// {/*return (*/}
// {/*<div key={res} onClick={this.handleItemClick.bind(this, idx)}>{res}</div>*/}
// {/*)*/}
// {/*})*/}
// {/*}*/}
