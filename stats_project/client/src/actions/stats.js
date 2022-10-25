import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getStats = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStats();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createStat = (stat) => async (dispatch) => {
    try {
        const { data } = await api.createStat(stat);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateStat = (id, stat) => async (dispatch) => {
    try {
        const { data } = await api.updateStat(id, stat);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteStat = (id) => async (dispatch) => {
    try {
        const response = await api.deleteStat(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}