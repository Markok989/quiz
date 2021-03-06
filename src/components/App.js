import React, { PropTypes } from 'react';
import Header from './common/Header';

// klasa koja predstavlja samu App, u gorenjem delu je header (navigacija),
// Ispod Header-a je sadrzaj app, prikzuje sadrzaj komponente koja je selektovana
class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
                {
                    /*
                    this, oznacava da je App, drugim recima koristi se da ne ponavlja ime komponente kojoj se pristupa
                    props-property, sadrzaj aplikacije,
                    children , pristupa komponentama koje su ispod (Parent) nje.
                    */
                }
            </div>
        );
    }
}

// testiranje, children treba da bude objekat, ako je nekog drugog tipa , prikazuje se greska 

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
