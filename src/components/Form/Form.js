import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Form.module.css';
// import { connect } from 'react-redux';
// import {
//   useCreateContactMutation,
//   useFetchContactsQuery,
// } from 'redux/contactsSlice';
import { Form, InputGroup, Button } from 'react-bootstrap';

const FormHero = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const nameInputId = nanoid();
  // const numberInputId = nanoid();

  // const [createContact] = useCreateContactMutation();
  // const { data } = useFetchContactsQuery();
  // const contacts = data;

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       console.warn(`There is something wrong`);
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   createContact({ name, number });
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form className={s.container}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Nickname
        </InputGroup.Text>
        <Form.Control
          aria-label="nickname"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Real name
        </InputGroup.Text>
        <Form.Control
          aria-label="real_name"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Origin description
        </InputGroup.Text>
        <Form.Control
          aria-label="origin_description"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Superpowers
        </InputGroup.Text>
        <Form.Control
          aria-label="superpowers"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className={s.label}>
          Catch phrase
        </InputGroup.Text>
        <Form.Control
          aria-label="catch_phrase"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className={s.label}>Images</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button size="lg" type="submit" className={s.btn}>
        Create superhero
      </Button>
    </Form>
  );
};

export default FormHero;
