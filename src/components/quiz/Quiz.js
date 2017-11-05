import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import Question from './Question';


class Quiz extends React.Component {
    // konstruktor sa property
    constructor(props) {
        super(props);

        // pocetni state za ovu komponentu
        this.state = {
            index: 0,
            answers: []
        };
    }

    // handler za submit odgovora,
    // uslov ako je state.index manji od duzine pitanja primenjuje se sledece,
    // state dobija novu vrednost 'index': this.state.index + 1,

    handleSubmit() {
        if (this.state.index < this.props.quiz.questions.length) {
            this.setState(
                {
                    'index': this.state.index + 1
                }
            );
            // u suprotnom score dobija vrednost pocetne vrednosti state ili nuka(0),
            // zatim se ceslja kroz odgvore preko .map, 
            // score dobija novu vrednost, score plus(sabira) sa vrednosu tretnutnog
            // odgovora(odgovor koji se nalazi u trenutnom pitanju) koji ima vrednost true,
            // state dobija novu vrednost 'score': score
        } else {
            let score = this.state.score || 0;
            this.state.answers.map((answer, i) => (
                score = score + this.props.quiz.questions[i].answers[answer].isTrue
            ));
            this.setState(
                {
                    'score': score
                }
            );
        }
    }
    // handler za slektovanje odgovora, ima atribut event
    // zatim izvlaci odgocore iz niza i preko slice izlvaci index,
    // parseInt omogucava konverziju stringa u intiger(broj), uzima vrednost iz event.target.value,
    // nakon toga opet izvlaci odgvore, preko slica izvlaci index i dodaje 1, 1 se dodaje iz razloga sto se u js numeracija gleda
    // od 0,1,2,3 , dodavanjem jedinice dobija se broj koji je potreban za prikaz,
    // answer ima novi state
    handleAnswerSelected(event) {
        let list = [
            ...this.state.answers.slice(0, this.state.index),
            parseInt(event.target.value),
            ...this.state.answers.slice(this.state.index + 1)
        ];
        this.setState({ 'answers': list });
    }


    // render metoda za prikaz komponente
    // index i answers su konstantni,
    // element completed sadrzi vrednos pitanja i ako je index striktno jednak duzini niza pitanja,
    // gleda se vrednost da li je true ili false,
    // numberOfQuestions predstavlja broj pitanja, 
    // score ima vrednost nula(0),
    // uslov, ako je completed, prolazi se kroz odgovore, odgovore koji se nzlaze u istom pitanju, i gleda se da li je 
    // true ili false
    render() {
        const { index, answers } = this.state;
        const { quiz } = this.props;
        let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false;
        let numberOfQuestions = quiz.questions ? quiz.questions.length : 0;
        let score = 0;
        if (completed) {
            this.state.answers.map((answer, i) => (
                score = score + (this.props.quiz.questions[i].answers[answer].isTrue ? 0 : 1)
            ));
        }

        // element panel sadrzi naslov od kviza quiz.title
        return (
            <div>
                <Panel header={quiz.title}>
                    {
                        /*
                        element completed se pokazuje kad se ispuni odredjen uslov(posle zavrsetka kviza),
                        prikazuje se :
                        <div>
                                <p>Congratulation, you finished the quiz</p>
                                Your score is {score}
                            </div>
                            stim sto je score rezultat kviza
                        */

                        /*
                        u sluacaju da kviz jos traje prikazuje se pitanje sa indexom plus 1(zbog numeracije) i broj pitanja
                        ispod se nalazi komponenta Question sa atributima,
                                key se koristi da svaki element bude jedinstven unutar komponente,
                                quiz uzima vrednosti iz quiz,
                                question prikazuje pitanja sa indexom(numeracija pitanja 0,1,2,3,..),
                                index ima vrednost index,
                                onAnswerSelected koristi metodu handleAnswerSelected za selektovanje odgovara,
                                onSubmit koristi metodu handleSubmit za potvrdu selekcije
                        */
                    }
                    {completed ?
                        <div>
                            <p>Congratulation, you finished the quiz</p>
                            Your score is {score}
                        </div>
                        :
                        <div>
                            <p>Question {index + 1} of {numberOfQuestions}</p>
                            {quiz.questions && index < numberOfQuestions ?
                                <Question key={quiz.id} quiz={quiz}
                                    question={quiz.questions[index]}
                                    index={index}
                                    onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                                    onSubmit={() => this.handleSubmit()}
                                />
                                : ''}
                        </div>
                    }
                </Panel>
            </div>
        );
    }
}


// funkcija getCourseById sa elementima (quizzes i id),
// quiz sadrzi quizzes koji je filtriran(gleda se da quiz.id bude jednak sa id)
// ako quiz vrati quiz[0] , da se ne bi javljala greska vraca se null
function getCourseById(quizzes, id) {
    const quiz = quizzes.filter(quiz => quiz.id == id);
    if (quiz) return quiz[0]; //since filter returns an array, have to grab the first.
    return null;
}


// funkcija mapStateToProps sluzi da spoji redux sa komponentom, 
// const quizId = ownProps.params.id; sluzi da omoguci putanju za `/course/:id`
// quiz ima elemente id title i length koji imaju vrednost prazan string,
// uslov, ako su quizId i duzina niza veci od nule(0)
// quiz prikazuje getCourseById sa elementima state.quizzes, quizId,
// na kraju se vraca quiz sa sadrzajem quiz
function mapStateToProps(state, ownProps) {
    const quizId = ownProps.params.id; // from the path `/course/:id`

    let quiz = { id: '', title: '', length: '' };

    if (quizId && state.quizzes.length > 0) {
        quiz = getCourseById(state.quizzes, quizId);
    }

    return {
        quiz: quiz
    };
}

// connect za povezivanje funkcije mapStateToProps sa komponentom,
// null se pise je je izostavljena funkcija mapDispatchToProps
export default connect(mapStateToProps, null)(Quiz);
