import React, { useEffect, useState } from 'react'
import { Image, Transformation } from 'cloudinary-react';
import { getPublicaciones } from '../../helpers/publicacion';
import { Card } from '../layout/Card';
import { NavBarSeach } from '../layout/NavBarSeach';
import { Link } from 'react-router-dom';

export const Adopcion = () => {

    const [cargando, setCargando] = useState(true);

    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones('adopcion/listar');
            if (resp.ok) {
                setPublicaciones(resp.publicaciones);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    if (cargando) {
        return <div>Cargando, espere un momento...  </div>
    };

    if (!publicaciones.length) {
        return <div>Nada por aquí...  </div>
    };

    return (
        <div className="row mx-0">
            <NavBarSeach />
            <div className="col-sm-2">
                <div className="card mt-4 w-100 h-100 border-0">
                    <div className='m-3'>

                        <Link to="/publicacion">
                            <Image
                                cloudName='dawjd5cx8'
                                publicId='mundo_animal/add_nmr0pu.svg'


                            >

                                <Transformation height="500" width="500" aspectRatio="1.5" crop="fill" />
                            </Image>
                        </Link>

                    </div>
                </div>
            </div>
            {
                publicaciones.map(mascota => (
                    <Card
                        key={mascota.uid}
                        {...mascota} />
                ))
            }
        </div>
    );
};
