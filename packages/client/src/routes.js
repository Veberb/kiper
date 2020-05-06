import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Apartment from './pages/Apartment';


const Routes = () => {
    return (
        <Router>
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route path="/apartment" component={Apartment} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )}

export default Routes;