import streams              from '../Apis/streams';
import {CREATE_STREAM}      from './types';
import History              from "../Components/History/History";


export const createStream = formVales => async (dispatch,getSate) => {
    const {userId} = getSate().auth;
    const response = await streams.post('/streams', { ...formVales,userId });
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    History.push('/');
};