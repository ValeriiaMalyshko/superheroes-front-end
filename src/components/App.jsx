// import React from 'react';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Form from './Form/Form';
// import ContactList from './Contacts/ContactList';
import Section from './Section/Section';
// import Filter from './Filter/Filter';
import Navigation from './Navigation/Navigation';

const AddHero = lazy(() => import('./Form/Form'));
const Heroes = lazy(() => import('./Contacts/ContactList'));

export default function App() {
  return (
    <>
      <Navigation />
      <Section>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/">
              <Route path="/heroes" element={<Heroes />} />
              <Route path="new-hero" element={<AddHero />} />
            </Route>
          </Routes>
        </Suspense>
      </Section>
    </>
  );
}
