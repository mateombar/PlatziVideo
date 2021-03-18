import {types} from './types';

export const setFavorite = payload => ({
    type: types.setFavorite,
    payload,
});
export const deleteFavorite = payload => ({
    type: types.deleteFavorite,
    payload,
});