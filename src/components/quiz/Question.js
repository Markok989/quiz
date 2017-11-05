import React from 'react';
import { Panel, ButtonToolbar, ListGroup } from 'react-bootstrap';

// Question komponenta
const Question = ({ question, index, onAnswerSelected, onSubmit }) => {
    return (
        <div>
            {
                /*
                Panel element koji ispisuje ime pitanja, prvi question je veza koja povezuje sa jsonom, drog drugi definise sta ce da prikaze,
                tacnije predstavlja ime elemetna koji prikazuje,  
                bsStyle="primary" je stil za izgled tog elementa
                */

                /*
                ListenGroup je za prikaz za prikaz neuredjne listem
                < ol> sluzi za prikaz uredjene liste , koristeci slova za uredjivanje,
                */

                /*
                {question.answers.map((answer, i) element prolazi krzo sve odgovorem
                u Panelu se definise kako ce izgledati ti odgovroi kroz koje se prolazi(ceslja),
                <li sadrzi kljuc po kom se gleda da se elementi ne ponavljaju, tj da svaki element bude jedinstven,
                input element koji je radio tipa (selektovanje jedne opcije od vise ponudjenih) sadrzi sledece:
                        ime: koje sadrzi index pitanja koji je deo questiona,
                        id: sadrzi index question-a i "i" od answer-a,
                        defaultChecked znaci da nije stiklirna(selektovana) opcija,
                        onChange: za promenu se koristi metoda onAnswerSelected
                */

                /*
                lanel element sadrzi atribut koji povezan za question-om i answer-om, i prikazuje answer.label(sadrzaj odgovora) 
                */

                /*
                button element ima atribude za stilizovanje className="btn btn-primary" i na klik primenjuje metodu onSubmit,
                tekst unutar dugmeta je Submit
                */
            }
            <Panel header={question.question} bsStyle="primary">
                <ListGroup componentClass="ul">
                    <ol type="a">
                        {question.answers.map((answer, i) =>
                            <Panel>
                                <li key={`${index}-${i}`}>
                                    <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`}
                                        defaultChecked={false} value={i} onChange={onAnswerSelected} />
                                    {' '}
                                    <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
                                </li>
                            </Panel>
                        )}
                    </ol>
                </ListGroup>
            </Panel>
            <button className="btn btn-primary" onClick={onSubmit}><h4>Submit</h4></button>
        </div>
    );
};

export default Question;
