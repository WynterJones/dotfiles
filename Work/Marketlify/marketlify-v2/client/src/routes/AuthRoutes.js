// ----
// Dependencies
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// ----
// Routes / Views
import Dashboard from '../views/Dashboard';


// ----
// Routes
const AuthRoutes = () => {
    return (
        <Switch>
            <Route 
                path="/" 
                exact
                component={ Dashboard }
            />

            <Route 
                path="/dashboard" 
                exact
                component={ Dashboard }
            />


            <Route 
                path="/not-found" 
                exact
                component={() => {
                    return (
                        <div>
                            Not Found
                            TODO: Make 404 view
                        </div>
                    )
                }}
            />


            <Redirect 
                from="/login"
                to="/"
            />

            <Redirect 
                from="/create-account"
                to="/"
            />

            <Redirect 
                from="/:any" 
                to="/not-found"
            />
        </Switch>
    )
}


// ----
// Export Routes
export default AuthRoutes;