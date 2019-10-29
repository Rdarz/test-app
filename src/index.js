import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from 'Components/Login';
import Home from 'Components/Home';
import { Provider } from 'react-redux'
import createStore from 'Redux/createStore'


const routing = (
  <Router>
  	<Switch>
	    <Route path="/login" exact component={Login} />
	    <Route path="/home" exact  component={Home} />
	    <Redirect exact from="/" to="login" />
    </Switch>
  </Router>
)

ReactDOM.render(
	<Provider store={createStore()}>
		{routing}
  </Provider>,
  document.getElementById('root')
);
