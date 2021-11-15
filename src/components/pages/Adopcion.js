import React, { useEffect, useState } from 'react'
import { getPublicaciones } from '../../helpers/publicacion';
import { Card } from '../layout/Card';

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
        <div className="row">
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
