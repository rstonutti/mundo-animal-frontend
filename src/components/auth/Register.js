import React from 'react';
import {
    Link
} from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Schema = yup.object().shape({
    nombre: yup.string().required(),
    correo: yup.string().email().required(),
    contrasenia: yup.string().required(),
    recontrasenia: yup.string().oneOf([yup.ref('contrasenia'), null]).required()
})

export const Register = () => {

    const { register, handleSubmit, errors } = useForm({
        reolver: yupResolver(Schema)
    });

    return (
        <>
            <h3 className="mb-3 fw-bold text-center">RegisterScreen</h3>

            <form onSubmit={handleSubmit()} className="text-center">
                <input
                    className="form-control w-auto m-2"
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                />
                <input
                    className="form-control w-auto m-2"
                    type="email"
                    placeholder="correo"
                    name="correo"
                />
                <input
                    className="form-control w-auto m-2"
                    type="password"
                    placeholder="contraseña"
                    name="contrasenia"
                />

                <input
                    className="form-control w-auto m-2"
                    type="password"
                    placeholder="recontraseña"
                    name="recontrasenia"
                />

                <button
                    className="btn btn-primary m-2"
                    type="submit"
                >
                    Registrarse
                </button>
                <div className="mt-1">
                    <Link
                        className="text-decoration-none"
                        to="/auth/login"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>
                </div>
            </form>
        </>
    )
}
