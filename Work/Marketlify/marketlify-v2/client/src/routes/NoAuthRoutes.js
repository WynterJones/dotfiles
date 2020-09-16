// ----
// Dependencies
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// ----
// Routes / Views
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';


// ----
// Routes
const NoAuthRoutes = () => {
    return (
        <Switch>
            <Route 
                path="/login" 
                exact
                component={ Login }
            />

            <Route 
                path="/"
                exact
                component={ Login }
            />


            <Route 
                path="/create-account" 
                exact
                component={ CreateAccount }
            />


            <Route 
                path="/not-found" 
                exact
                component={() => {
                    return (
                        <div>
                            Not Found
                        </div>
                    )
                }}
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
export default NoAuthRoutes;