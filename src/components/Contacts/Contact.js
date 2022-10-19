import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useDeleteHeroMutation } from 'redux/heroesSlice';

export default function Contact({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteHeroMutation();
  return (
    <li className={s.li}>
      <span>
        {name} : {phone}
      </span>
      <button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
