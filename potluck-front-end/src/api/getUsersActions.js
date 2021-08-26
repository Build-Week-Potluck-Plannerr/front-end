import axios from 'axios';

export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const ADD_GUEST_START = 'ADD_GUEST_START';
export const ADD_GUEST_SUCCESS = 'ADD_GUEST_SUCCESS';
export const ADD_GUEST_FAIL = 'ADD_GUEST_FAIL';

export const REMOVE_GUEST_START = 'REMOVE_GUEST_START';
export const REMOVE_GUEST_SUCCESS = 'REMOVE_GUEST_SUCCESS';
export const REMOVE_GUEST_FAIL = 'REMOVE_GUEST_FAIL';

export const UPDATE_GUEST_START = 'UPDATE_GUEST_START';
export const UPDATE_GUEST_SUCCESS = 'UPDATE_GUEST_SUCCESS';
export const UPDATE_GUEST_FAIL = 'UPDATE_GUEST_FAIL';

export const getUsers = dispatch => {
    dispatch({type: GET_USERS_START});
    axios.get('https://mysterious-river-93270.herokuapp.com/api/users')
    .then(res => {
        dispatch({type: GET_USERS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: GET_USERS_FAIL, payload: err.response.data.message})
    })
};

export const addGuest = (dispatch, id, guest) => {
    dispatch({type: ADD_GUEST_START});
    axios.post(`https://mysterious-river-93270.herokuapp.com/api/events/${id}/guests`, guest)
    .then(res => {
        dispatch({type: ADD_GUEST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_GUEST_FAIL, payload: err.response.data.message})
    })
};

export const removeGuest = (dispatch, id, guest) => {
    dispatch({type: REMOVE_GUEST_START});
    axios.delete(`https://mysterious-river-93270.herokuapp.com/api/events/${id}/guests`, guest)
    .then(res => {
        dispatch({type: REMOVE_GUEST_SUCCESS, payload: res.data})
        return true
    })
    .catch(err => {
        dispatch({type: REMOVE_GUEST_FAIL, payload: err.response.data.message})
    })
};

export const updateGuests = (dispatch, id, user_id, isAttending) => {
    dispatch({type: UPDATE_GUEST_START});
    axios.put(`https://mysterious-river-93270.herokuapp.com/api/events/${id}/guests/${user_id}`, isAttending)
    .then(res => {
        dispatch({type: UPDATE_GUEST_SUCCESS, payload: res.data})
        return true
    })
    .catch(err => {
        dispatch({type: UPDATE_GUEST_FAIL, payload: err.response.data.message})
    })
};

