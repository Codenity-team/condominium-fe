import React, {useContext} from 'react'
import {BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
export const AppRouter = () => {
    const {user:{logged}} = useContext(AuthContext);
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter 
                        path="/auth"
                        component={AuthRouter}
                        isAuth = {logged} 
                    />
                    <PrivateRouter 
                        path="/"
                        component={DashboardRouter}
                        isAuth = {logged}
                    /> 
                    <Redirect to="/auth"/>         
                </Switch>
            </div>
        </Router>
    )
}
