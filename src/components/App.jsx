import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Form from './Form/Form';
// import ContactList from './Contacts/ContactList';
import Section from './Section/Section';
// import Filter from './Filter/Filter';

const AddHero = lazy(() => import('./Form/Form'));
const Heroes = lazy(() => import('./Contacts/ContactList'));

export default function App() {
  return (
    <Section
      className="p-3 rounded border border-1 bg-light mt-2"
      style={{ maxWidth: '500px' }}
    >
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Heroes />} />
            <Route path="login" element={<AddHero />} />
          </Route>
        </Routes>
      </Suspense>
    </Section>
  );
}
