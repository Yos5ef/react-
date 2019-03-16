import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DEL_TODO_ITEM} from "./actionTypes";

const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});


const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});


const getDelItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
});



export {
    getInputChangeAction,
    getAddItemAction,
    getDelItemAction
}

