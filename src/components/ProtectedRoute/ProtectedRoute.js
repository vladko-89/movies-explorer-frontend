import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path} exact>
      {props.isCheking ?
        <Preloader />
      :
      (
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )
    }
      
    </Route>
  )
}

export default ProtectedRoute;