// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Description } from './Description'
import { Header } from './Header'
import { DogListContainer } from './DogListContainer'

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
