import React from 'react';

import './Hero.css';

const hero = () => {
  return (
    <section id="hero">
      <h1>SHIP IT QUICKLY</h1>
      <h2>FALL IN LOVE WITH NATURE</h2>
      <form id="form" action="https://www.freecodecamp.com/email-submit" autoComplete="off">
        <input name="email" id="email" type="email" placeholder="e-mail" required />
        <input id="submit" type="submit" value="Get Started" className="btn" />
      </form>
    </section>
  );
}

export default hero;
