import React, { PropTypes } from 'react';

class QuestionCreatePage extends React.Component {
    constructor() {
        super();

        this.state = {
            numQuestion: 0
        };
    }

    render() {
        return (
            <div className="panel-body">
                <h1>Quiz Creator</h1>
            </div>
        );
    }
}


export default QuestionCreatePage;