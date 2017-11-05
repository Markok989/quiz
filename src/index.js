import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import { loadQuiz } from './actions/quizActions';


// konfiguracija Store, ucitava potrebme akcije
const store = configureStore();

// ucitavanje loadQuiz-a u store
store.dispatch(loadQuiz());


// metoda koja prikazuje app, Provider wrap-uje elemente
/*app se prikazuje u elementu koji ima id-app,*/
//Provider component attach app to redux-store
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);