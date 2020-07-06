import streams          from '../Apis/streams';
import {FETCH_STREAMS}  from './types';


export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
};