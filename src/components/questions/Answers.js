import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextInput from '../common/TextInput';
import * as answerActions from '../../actions/answerActions';

class Answer extends React.Component {
    constructor(props) {
        super(props);

        // pocetni state
        this.state = {
            questionId: '',
            id: '',
            answer: '',
            isTrue: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // renderuje komponentu ako je state.id===(striktno) '' kao i state.questionId==='', 
    // i prikazuje novo stanje
    componentWillMount() {
        if (this.state.id === '' && this.state.questionId === '')
            this.setState(
                {
                    id: this.props.id,
                    questionId: this.props.questionId,
                    isTrue: this.props.isTrue
                });
    }

    // update-uje stanje , koristeci akciju updateAnswerSuccess
    componentDidUpdate() {
        this.props.action.updateAnswerSuccess({
            questionId: this.state.questionId,
            id: this.state.id,
            label: this.state.label,
            isTrue: this.state.isTrue
        });
    }
    // hendler za promenu stanja, answer pokazuje vaule(vrednost)
    handleChange(event) {
        this.state({ answer: event.target.value });
    }

    render() {
        // konstantno (elementi) koji se nalaze u Answer
        const { id, removeAnswer, questionId, setAnswerOnTrue, isTrue } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    {
                        /*
                        text inpunt komponenta sa atributima,
                        vrednost je trenutna vrednost answer-a
                        onChange: koristi metodu handleChange za promenu stanja
                        */
                    }
                    <TextInput
                        name="answer"
                        label="Answer"
                        value={this.state.answer}
                        onChange={this.handleChange} />
                    {
                        /*
                         input sa atributima,
                         onClick primenjuje removeAnswer
                         */
                    }
                    <input
                        type="submit"
                        value="Remove Answer"
                        className="btn btn-default"
                        onClick={() => removeAnswer(id)} />
                    {
                        /*
                         dugme,
                         onClick primenjuje setAnswerOnTrue,
                         u ovom slucaju prikazuje dva className, u slucaju da je tacno pokazuje success, u slucaju da je pogresno danger,

                         span,
                         takodje se primenjuje dva className, za tacno ok-circle, za pogresno remove-circle

                         na kraju se ispisuje poruka,
                         isTrue, ako je tacno izbacuje poruku Answer is true, u suprotonom, Answer is false
                         */
                    }
                    <button type="button"
                        onClick={() => setAnswerOnTrue(id)}
                        className={isTrue ? "btn btn-success" : "btn btn-danger"}>
                        <span className={isTrue ? "glyphicon glyphicon-ok-circle" : "glyphicon glyphicon-remove-circle"}></span>
                        {isTrue ? "Answer is true" : "Answer is false"}
                    </button>
                </div>
            </div>
        );
    }

}



// mapDispatchToProps vezuje komponentu za akciju i koja se akcija primenjuje, 
// answeractions je akcija koja se koristi, a dispatch je doprema
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(answerActions, dispatch)
    };
}

// connect se koristi da se spoji(koristi) mapDispatchToProps u komponenti,
// null je iz razloga sto se ne koristi mapStateToProps, koja ima funkciju da spaja komponentu sa reduxom

export default connect(null, mapDispatchToProps)(Answer);