import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import QuizList from './QuizList';




class QuizPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    quizRow(quiz, index) {
        return <div key={index}>{quiz.title}</div>;
    }


    render() {
        const { quizzes } = this.props;
        // prikaz komponente,
        // poziva se komponenta QuizList i prikazuje se njen sadrzaj
        // quizzes prikazuje sadrzaj quizzes
        return (
            <div>
                <h1>List of Quizzes</h1>
                <QuizList quizzes={quizzes} />
            </div>
        );
    }
}


// proverza za ilazne rezultate komponente
QuizPage.propTypes = {
    quizzes: PropTypes.array.isRequired
};


// povezuje redux(store) sa komponentom, tj koji deo reduxa je potrebno da se prikaze
//what part of redux store you want to expose  to component
function mapStateToProps(state, ownProps) {
    return {
        quizzes: state.quizzes
    };
}

// connect za povezivanje mapStateToProps sa komponentom
export default connect(mapStateToProps)(QuizPage);

