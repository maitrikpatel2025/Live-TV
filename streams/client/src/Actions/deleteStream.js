import streams                  from '../Apis/streams';
import {DELETE_STREAM}          from './types';
import History                  from '../Components/History/History';


export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    History.push('/')
};