import React from 'react'
import {
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import { NavBar } from '../components/layout/NavBar'
import { Home } from '../components/pages/Home';
import { Adopcion } from '../components/pages/Adopcion';
import { Busqueda } from '../components/pages/Busqueda';
import { Publicacion } from '../components/pages/Publicacion';

export const DashboardRouter = () => {
    return (
        <>
            <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/adopciones' component={Adopcion} />
                <Route exact path='/busquedas' component={Busqueda} />
                <Route path='/:id' component={Publicacion} />

                <Redirect to='/' />
            </Switch>
        </>
    )
}
