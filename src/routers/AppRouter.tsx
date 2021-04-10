import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';

import { LandingScreen } from '../screens/condominium/LandingScreen';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter}/>
                    <Route exact path="/" component={LandingScreen}/>   
                    <Redirect to="/auth/login"/>         
                </Switch>
            </div>
        </Router>
    )
}
