import streams          from '../Apis/streams';
import {EDIT_STREAM}    from './types';
import History          from "../Components/History/History";


export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    History.push('/')
};