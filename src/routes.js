import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import QuestionCreatePage from './components/questions/QuestionCreatePage';


// definisane rute za stranice u app
export default (
    <Route path="/" component={App}>{/*app komponenta, parent*/}
        <IndexRoute components={HomePage} />{/*HomePage komponenta, child (pocetna strna)*/}
        <Route path="questions" component={QuestionCreatePage} />
    </Route>
);