import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem('token')) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default ProtectedRoute

// This is only accessible to user once logged in with auth token given.