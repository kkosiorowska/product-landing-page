import React from 'react';

import './Footer.css';

const footer = () => {
  return (
  <footer>
    <div className="nav">
		<div className="nav-item">
			<a href="https://github.com/kkosiorowska"><i className="fa fa-github"></i></a>
		</div>
		<div className="nav-item">
			<a href="https://www.linkedin.com/in/karolina-kosiorowska-7aa5851a4/"><i className="fa fa-linkedin"></i></a>
		</div>
		</div>
    <span>Copyright ©, Karolina Kosiorowska</span>
  </footer>
  );
}

export default footer;