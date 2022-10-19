import React from 'react';
// import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './Contact.module.css';
import { useFetchHeroesQuery } from 'redux/heroesSlice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data } = useFetchHeroesQuery();
  const filter = useSelector(state => state.filter);

  if (data) {
    const visibleContacts = data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className={s.ul}>
        {visibleContacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    );
  }
};

export default ContactList;
