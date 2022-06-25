import s from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Searchbar({ onSubmitClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubjectChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmitClick(searchQuery);
    setSearchQuery('');
  };

  return (
    <form className={s.form__thumb} onSubmit={handleSubmit} autoComplete="off">
      <input
        className={s.form__input}
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={handleSubjectChange}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
};

export default Searchbar;
