import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// sadrzaj komponente QuizListRow
const QuizListRow = ({ quiz }) => {
    return (
        <tr>
            {
                /*
                &nbsp; oznacava prazan red
                */
            }
            <td>&nbsp;</td>
            {
                /*
                putanja '/quizzes/' + quiz.id oznacava putanju kviza,
                na link(putanju) quizzes dodaje id kviza,
                sadrzaj linka je naslov kviza(quiz.title)
                */
            }
            <td><Link to={'/quizzes/' + quiz.id}>{quiz.title}</Link></td>
            {
                /*
                {quiz.questions.length} oznacava duzinu niza tj ukupan broj pitanja
                */
            }
            <td>{quiz.questions.length}</td>
        </tr>
    );
};


// provera za ilazne rezultate u komponentni
QuizListRow.propTypes = {
    quiz: PropTypes.object.isRequired
    //q: PropTypes.array.isRequired
};

export default QuizListRow;
