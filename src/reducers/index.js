import { types } from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.setFavorite:
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case types.loadingPlaying:
            return {
                ...state,
                loadingPlaying: true,
            }
        case types.deleteFavorite:
            return {
                ...state,
                myList: action.payload
            }
        case types.login:
            return {
                ...state,
                user: action.payload
            }
        case types.logout:
            return {
                ...state,
                user: {}
            }
        case types.register:
            return {
                ...state,
                user: action.payload
            }
        case types.getVideoSrc:
            return {
                ...state,
                playing: action.payload,
                loadingPlaying: false,
            }
        default: return state;
    }
}

export default reducer;