import React, { PropTypes } from 'react';
import QuizListRow from './QuizListRow';
import { Table } from 'react-bootstrap';

// sadrzaj komponente QuizList
const QuizList = ({ quizzes }) => {
    return (
        <Table responsive>
            <table className="table">
                {
                    /*
                    thead prvi deo tabele 
                    */
                }
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Number of questions</th>
                    </tr>
                </thead>
                {
                    /*
                    drugi deo tabele
                    */

                    /*
                    quizzes.map prolazi kroz QuizListRow, i prikazuje sta je u toj komponenti
                    key sluzi da elementi budu jedninstveni , quiz uzima sadrzaj iz quiz
                    */
                }
                <tbody>
                    {quizzes.map(quiz =>
                        <QuizListRow key={quiz.id} quiz={quiz} />
                    )}
                </tbody>
            </table>
        </Table>
    );
};


// provera za izlazne vrednosti u komponenti
QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired
};

export default QuizList;

