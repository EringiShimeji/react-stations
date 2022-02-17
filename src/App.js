// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Description from './Description'
import DogListContainer from './DogListContainer'
import Header from './Header'

/**
 *
 * @type {React.FC}
 */
export const App = () => (
  <>
    <Header />
    <Description />
    <DogListContainer />
  </>
)
