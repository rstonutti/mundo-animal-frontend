import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { DashboardRouter } from './DashboardRouter';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <div className='container'>
            <Router>
                <div>
                    <Switch>
                        <Route path="/auth" component={AuthRouter} />
                        <Route path="/" component={DashboardRouter} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
