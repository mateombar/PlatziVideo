import { types } from './types';
export const setFavorite = (favorite) => (dispatch, getState) => {
    const { myList } = getState();
    const exist = myList.find(item => item.id === favorite.id)
    if (!exist) {
        dispatch({
            type: types.setFavorite,
            payload: favorite,
        })
    }
};
export const deleteFavorite = idFavorite => (dispatch, getState) => {
    const { myList } = getState();
    const filteredMyList = myList.filter((item) => item.id !== idFavorite)
    dispatch({
        type: types.deleteFavorite,
        payload: filteredMyList,
    })
};

export const loginRequest = formValues => (dispatch) => {
    dispatch({
        type: types.login,
        payload: formValues
    })
}
export const logoutRequest = () => (dispatch) => {
    dispatch({
        type: types.logout,
    })
}

export const registerRequest = (formValues) => (dispatch) => {
    dispatch({
        type: types.register,
        payload: formValues
    })
}

export const getVideoSource = (id) => async (dispatch, getState) => {
    dispatch({
        type: types.loadingPlaying,
    })
    const { trends, originals } = getState();
    const selected = await trends.find(item => item.id === Number(id)) || originals.find(item => item.id === Number(id)) || []
    await dispatch({
        type: types.getVideoSrc,
        payload: selected
    })
}