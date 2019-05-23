
import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import ErrorPage from '../components/NotFoundPage';
import AuthenticationPage  from '../components/AuthenticationPage';
import createHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

  const AppRouter = () =>(
    <Router history={history}>
          <div>
              <Switch>
                  <PublicRoute path="/" component={AuthenticationPage} exact={true}/>
                  <PrivateRoute path="/dashboard" component={DashboardPage} />
                  <Route component={ErrorPage} />
              </Switch>
          </div>
  
      </Router>
  );

  export default AppRouter;