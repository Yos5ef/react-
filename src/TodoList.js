import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';
import store from './store';



class TodoList extends Component {

    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = {
            inputValue: '',
            list: ['学习英文', '学习react', '<h1>123</h1>']
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        // 在组件即将被挂在到页面的时刻自动执行
        console.log('componentWillMount');
    }

    render() {
        return (
            <Fragment>
                {/*注释*/}
                <label htmlFor="asd">qwe</label>
                <div>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <TodoItem
                                        index={index}
                                        content={item}
                                        deleteItem={this.handleDelete}
                                    />
                                    {/*<li className="test" key={index}>{item}</li>*/}
                                </div>

                            )
                        })
                    }
                </ul>
                <div dangerouslySetInnerHTML={{__html: this.state.list[2]}}>

                </div>

            </Fragment>
        )
    }

    componentDidMount() {
        //组件被挂在到页面上开始执行
        console.log('componentDidMount');
        axios.get('/api/aa').then(res => {
            console.log(res);
        }).catch(err => {
            console.log('err:', err)
        })
    }

    //组件更新之前执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件更新之前执行 如果 shouldComponentUpdate返回true 就执行
    componentWillUpdate() {

    }

    handleInputChange() {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState(() => (
            {list: [...this.state.list, this.state.inputValue]}
        ))
    }

    handleDelete(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}


export default TodoList;
