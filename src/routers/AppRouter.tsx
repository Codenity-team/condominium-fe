import React, {useContext} from 'react'
import {BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { LandingScreen } from '../screens/condominium/LandingScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
    const {user:{logged}} = useContext(AuthContext);
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={AuthRouter}
                        isAuth = {logged} 
                    />
                    <PrivateRoute 
                        path="/"
                        component={LandingScreen}
                        isAuth = {logged}
                    /> 
                    <Redirect to="/auth"/>         
                </Switch>
            </div>
        </Router>
    )
}
