import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import QuestionCreatePage from './components/questions/QuestionCreatePage';
import Quiz from './components/quiz/Quiz';
import QuizPage from './components/quiz/QuizPage';


// definisane rute za stranice u app
export default (
    <Route path="/" component={App}>{/*app komponenta, parent*/}
        <IndexRoute components={HomePage} />{/*HomePage komponenta, child (pocetna strna)*/}
        <Route path="quizzes" component={QuizPage} />{/* QuizPage komponenta, child (strana sa spiskom kvizova)*/}
        <Route path="quizzes/:id" component={Quiz} />{/* Componenta Quiz, quizzes + id je url za tu stranu, child, strana sa kvizom*/}
        <Route path="questions" component={QuestionCreatePage} />{/* QuestionCreatePage komponenta, child (strana za dodavanje kviza)*/}
    </Route>
);