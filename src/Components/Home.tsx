import React, { useState } from 'react';
import '../Stylings/home.css';
import Introduction from './Introduction';
import Quotes from './Quotes';

const Home = () => {
  return (
    <>
      <div id="introduction">
        <Introduction />
      </div>

      <div id="quotes">
        <Quotes />
      </div>
    </>
  );
};
export default Home;
