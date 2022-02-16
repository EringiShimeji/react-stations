import React from 'react';
import Header from '../molecules/Header';
import Gallery from '../organisms/Gallery';
import './home.css';

/**
 * @type {React.FC}
 */
const Home = () => (
  <div className="home-container">
    <Header />
    <Gallery />
  </div>
);

export default Home;
