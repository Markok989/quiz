import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import Answer from './Answers';
import TextInput from '../common/TextInput';

class Question extends React.Component {
    constructor(props) {
        super(props);

        // pocetni state
        this.state = {
            id: '',
            question: '',
            numAnswers: 1,
            answers: []
        };

        // bind omogucava stvaranje kopije fukncije kada je ta fukcija pozvana
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.id = this.id.bind(this);
        this.setAnswerOnTrue = this.setAnswerOnTrue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // hendler koji se odnosi na question: putanja do vrednosti ( value)
    handleChange(event) {
        this.setState({ question: event.target.value });
    }

    //pre nego sto se renderuje komponenta nasetujem id
    componentWillMount() {
        if (this.state.id === '') this.setState({ id: this.props.id });
    }

    //Okidam akciju u redux store-u nakon sto nasetujem state u ovoj komponenti
    componentDidUpdate() {
        this.props.actions.updateQuestionSuccess(
            {
                id: this.state.id,
                value: this.state.question
            }
        );
    }


    render() {
        // konstante za elemente 
        const { id, removeQuestion } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    {
                        /*
                         TextInput za atributima,
                         value uzima vrednost state.question
                         onChange vrsi promenu sa metodom handleChange
                         */
                    }
                    <TextInput
                        name="question"
                        label="Question"
                        value={this.state.question}
                        onChange={this.handleChange}
                    />
                    {
                        /*
                        sledeci element je namenjen za prikaz broj pitanja,
                        prvo se kroz kod prikaze ukupan broj odgovora  (this.state.answers.length),
                        zatim se rati .map koja prolazi kroz odgovore,
                        Pozivanjem Answer komponente sa atributima se prikazuju odgovori koji su definisani unutar komponente
                        */
                    }
                    <div>
                        {
                            (this.state.answers.length) ? this.state.answers.map(
                                (answer, i) =>
                                    <Answer
                                        key={answer.id}
                                        id={answer.id}
                                        removeAnswer={this.removeAnswer}
                                        questionId={this.state.id}
                                        setAnswerOnTrue={this.setAnswerOnTrue}
                                        isTrue={answer.isTrue} />
                            ) : <span>Currently 0 Answers </span>
                        }
                    </div>
                    {
                        /*
                        input element sa atributima koji sluzi za brisanje pitanja
                        */
                    }
                    <input
                        type="submit"
                        value="Remove Question"
                        className="btn btn-default"
                        onClick={() => removeQuestion(id)} />
                    {
                        /*
                        element sa atrubutima koji na klik omogucava dodavanje odgovora
                        */
                    }
                    <input
                        type="submit"
                        value="Add Answer"
                        className="btn btn-default"
                        onClick={this.addAnswer} />
                </div>
            </div>
        );
    }

    // metoda za brisanje odgovora,
    // ako je duzina odgovora odgovora veci od 0( drugim recima kriran je answer) , answer se filtira i gleda id,
    // zatim ako answer.id nije jednak sa id, answer dobija novo stanje, tacnije obrisan odgovor 
    removeAnswer(id) {
        if (this.state.answers.length > 0) {
            const answers = this.state.answers.filter(
                answer => answer.id != id
            );
            this.setState({ answers });
        }
    }

    // metoda za dodelu odgovirima da li su tacni ili ne,
    // uslov, ako je answer.id striktno jedna id,
    // answer.isTrue nije !answer.isTrue, answer dobija vrednost true,
    // u suprotnom answer.isTrue dobija vrednost false,
    // na kraju se vraca state sa tom vrednoscu
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

    // metoda za dodavanje odgovora,
    // ID uzima vrednost id iz metode koja nasumicno stvara id,
    // answer dobija nove vrednosti u odnosu pocetni state,
    // na kraju se vraca odgvor sa novim state
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
    // nasumicno kreiranje ID
    id() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Provera u konzoli za izlazni rezultat
Question.propTypes = {
    id: PropTypes.string.isRequired,
    removeQuestion: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};

// metoda za povezivanje odredje akcije u ovom slucaju questionActions
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}


// connect povezuje metodu mapDispatchToProps sa komponentom
export default connect(null, mapDispatchToProps)(Question);
