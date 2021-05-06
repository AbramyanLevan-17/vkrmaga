import React from 'react';
import "./Home.scss";
require('dotenv').config()


const Home = () => {
  const config = {
    id: process.env.REACT_APP_ID,
    key: process.env.REACT_APP_KEY
  }
  return (
    <div className="app">
      <section className="app__up randomizer">
        1
      </section>
      <section className="app__down generetor">
        2
      </section>
    </div>
  )
}

export default Home
