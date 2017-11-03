import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

// definisane rute za stranice u app
export default (
    <Route path="/" component={App}>
        <IndexRoute components={HomePage} />
    </Route>
);