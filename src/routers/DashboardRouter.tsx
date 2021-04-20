import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LandingScreen } from '../screens/condominium/LandingScreen'
export const DashboardRouter = () => {
    return (
        <Switch>
            <Route path="/" component={LandingScreen}/>
            <Redirect to="/"/>
        </Switch>
    )
}
