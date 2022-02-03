import {
    USUARIOS,
    USUARIO_LOGEADO,
} from '../actions/actionsTyps';

const inicialState = {
    usuarios: [],
    usuarioLogueado: {},
};

export default function rootReducer (state = inicialState, action) {
    switch (action.type) {
        case USUARIOS:
            return {
                ...state,
                usuarios: action.payload,
            };
        case USUARIO_LOGEADO:
            return {
                ...state,
                usuarioLogueado: action.payload,
            };
        default:
            return state;
    }
}