import React from 'react';
import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ children }) {
  return (
    <div className={s.container}>
      <div>{children}</div>
    </div>
  );
}

Section.propTypes = {
  children: propTypes.element,
};
