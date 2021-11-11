import React from 'react';
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div className="m-0 bg-secondary d-flex justify-content-center align-items-center vh-100">
            <div className="p-4 bg-white shadow p-3 mb-5 bg-body rounded-3 w-auto">
                <Switch>
                    <Route exact path='/auth/login' component={Login} />
                    <Route exact path='/auth/registro' component={Register} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}
