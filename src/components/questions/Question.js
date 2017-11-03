import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import Answer from './Answers';
import TextInput from '../common/TextInput';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            question: '',
            numAnswers: 1,
            answers: []
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.id = this.id.bind(this);
        this.setAnswerOnTrue = this.setAnswerOnTrue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ question: event.target.value });
    }

    //pre nego sto se renderuje komponenta nasetujem id
    componentWillMount() {
        if (this.state.id === '') this.setState({ id: this.props.id });
    }

    //Okidam akciju u redux store-u nakon sto nasetujem state u ovoj komponenti
    componentDidUpdate() {
        this.props.actions.updateQuestionSuccess({ id: this.state.id, value: this.state.question });
    }

    render() {

        const { id, removeQuestion } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    <TextInput
                        name="question"
                        label="Question"
                        value={this.state.question}
                        onChange={this.handleChange}
                    />

                    <div>
                        {(this.state.answers.length) ? this.state.answers.map(
                            (answer, i) =>
                                <Answer
                                    key={answer.id}
                                    id={answer.id}
                                    removeAnswer={this.removeAnswer}
                                    questionId={this.state.id}
                                    setAnswerOnTrue={this.setAnswerOnTrue}
                                    isTrue={answer.isTrue} />
                        ) : <span>Currently 0 Answers </span>}
                    </div>

                    <input
                        type="submit"
                        value="Remove Question"
                        className="btn btn-default"
                        onClick={() => removeQuestion(id)} />
                    <input
                        type="submit"
                        value="Add Answer"
                        className="btn btn-default"
                        onClick={this.addAnswer} />
                </div>
            </div>
        );
    }

    removeAnswer(id) {

        if (this.state.answers.length > 0) {
            const answers = this.state.answers.filter(
                answer => answer.id != id
            );
            this.setState({ answers });
        }
    }

    setAnswerOnTrue(id) {

        const answers = [...this.state.answers.map(answer => {
            if (answer.id === id) {
                answer.isTrue = (!answer.isTrue);
                return answer;
            } else {
                answer.isTrue = false;
                return answer;
            }
        })];

        this.setState({ answers });
    }

    addAnswer() {
        const ID = this.id();
        const answers = [
            ...this.state.answers,
            { id: ID, isTrue: false }
        ];
        this.setState({
            answers
        });
    }

    id() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

Question.propTypes = {
    id: PropTypes.string.isRequired,
    removeQuestion: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Question);
