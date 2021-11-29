import React from 'react'
import {Image, Transformation} from 'cloudinary-react';
import { Link } from 'react-router-dom';

import './layout.scss'

const filtroCaracteristicas = (tipo) => {
    switch (tipo) {
        case 'adopcion':
            return 'Adoptar';
        case 'busqueda':
            return 'Perdido';
        case 'gato':
            return 'Gato';
        case 'perro':
            return 'Perro';
        case 'agresivo':
            return '😡';
        case 'sociable':
            return '😃';
        case 'timido':
            return '😨';
        case 'independiente':
            return '😐';
        default:
            break;
    };
};

export const Card = ({ tipo, mascota: { nombre, especie, personalidad }, imagen, uid }) => {

    return (
        <>
            <div key={uid} className="col-sm-2">
                <div className="card mt-4 w-100 h-100">
                    <Image
                        cloudName='dawjd5cx8'
                        publicId={imagen}


                    >
                        
                        <Transformation height="500" width="500" aspectRatio="1.5" crop="fill" />
                    </Image>
                    <div className="card-body py-2">
                        <div className="card-grid">
                            <span className="card-title"><b>{nombre}</b></span>
                        </div>
                        <div className="card-grid personalidad">
                            {
                                filtroCaracteristicas(personalidad)
                            }
                        </div>
                        <div className="card-grid">
                            <p className="card-text">{
                                filtroCaracteristicas(especie)
                            }</p>
                        </div>
                    </div>
                    <Link className="card-footer text-center bg-primary text-white fw-bold text-decoration-none" to={`/${uid}`}>
                        {
                            filtroCaracteristicas(tipo)
                        }
                    </Link>
                </div>
            </div>
        </>
    );
};
