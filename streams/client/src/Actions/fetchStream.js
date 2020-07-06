import streams          from '../Apis/streams';
import {FETCH_STREAM}   from './types';


export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
};