import * as types from './../constants/ActionTypes';

export const searchTask = (keyword) => {
    return {
        type: types.SEARCH,
        keyword // keyword : keyword
    }
}