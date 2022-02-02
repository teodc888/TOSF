import {
    USUARIOS,
} from '../actions/actionsTyps';

const inicialState = {
    usuarios: [],
};

export default function rootReducer (state = inicialState, action) {
    switch (action.type) {
        case USUARIOS:
            return {
                ...state,
                usuarios: action.payload,
            };
        default:
            return state;
    }
}