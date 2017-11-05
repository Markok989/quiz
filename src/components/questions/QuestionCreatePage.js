import React, { PropTypes } from 'react';
import QuestionForm from './QuestionForm';

class QuestionCreatePage extends React.Component {
    constructor() {
        super();

        // pocecni state za ovu komponentu
        this.state = {
            numQuestions: 0
        };
    }

    // render metoda za prikaz stranice,
    // sadrzi h1 element i QuestionForm komponentu
    render() {
        return (
            <div className="panel-body">
                <h1>Quiz Creator</h1>
                <QuestionForm />
            </div>
        );
    }
}

export default QuestionCreatePage;
