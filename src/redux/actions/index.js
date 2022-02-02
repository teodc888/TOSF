import axios from 'axios';

import {
    USUARIOS,
} from './actionsTyps';


export const createUsuario = payload => {
    return async () => {
        try {
            let res = await axios.post(`http://localhost:3001/usuarios`, payload);
            return res;
        } catch (error) {
            console.log(error)
        }

    };
};

export const mostrarUsuarios = () => {
    return async () => {
        try {
            let res = await axios(`http://localhost:3001/usuarios`);
            return dispatch({
                type: USUARIOS,
                payload: res.data,
            });
        } catch (error) {
            console.log(error)
        }

    };
};