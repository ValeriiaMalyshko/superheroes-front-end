// import React from 'react'
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
// import FormHero from 'components/Form/Form'
import 'modern-normalize/modern-normalize.css'
import './index.css'

const Home = lazy(() => import('pages/Home'))
const NewHero = lazy(() => import('pages/NewHero'))

const Heroes = lazy(() => import('pages/Heroes'))
// const EditHero = lazy(() =>
//   import('components/EditHero' /* webpackChunkName: "edithero-page" */),
// )

export default function App() {
  return (
    <Suspense fallback={<h3>...Loading</h3>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          {/* <Route path="edit:heroId" element={<EditHero />} />  */}
          <Route path="new-hero" element={<NewHero />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
