import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  // uslov ako ima greska i ako je druzina greske vece od 0, prikazi wraperClass,
  // koji se uvecava za prazan string i "has-error"
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {
          /*
        polje za unos sa atributima, type: tip(tekst), name: ime, className: bootstrap stil, placeholder: prikazuje default tekst na elementu
        value: vrednost elementa, onChangde: funkcija koja se prikazuje na promenu
        */
        }
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {
          /*
        kad se javi greska okida se div sa alert karakteristikama (crveno upozorenje)
        i ispisuje se greska 
        */
        }
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

// testiranje, sta se ocekuje da bude kao izlaz, string, func , object
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;