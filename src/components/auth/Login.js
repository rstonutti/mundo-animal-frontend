import React from 'react';

import {
    Link
} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    nombre: yup.string().required(),
    contrasenia: yup.string().required()
})

export const Login = () => {
    
    return (
        <>
            <h3 className="mb-3 fw-bold text-center">LoginScreen</h3>

            <form className="text-center">
                <input
                    className="form-control w-auto m-2"
                    type="text"
                    placeholder="nombre"
                    name="nombre"

                />
                <input
                    className="form-control w-auto m-2"
                    type="password"
                    placeholder="contraseña"
                    name="contrasenia"

                />

                <button
                    className="btn btn-primary m-2"
                    type="submit"
                >
                    Ingresar
                </button>
                <button
                    className="btn btn-info m-2"
                    type="submit"
                >
                    Google
                </button>
                <div className="mt-1">
                    <Link
                        className="text-decoration-none"
                        to="/auth/registro"
                    >
                        Regístrate aquí
                    </Link>
                </div>
            </form>
        </>
    )
}
