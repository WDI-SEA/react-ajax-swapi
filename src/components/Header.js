import React from 'react';
import logo from '../images/logo.gif';

const Header = () => {
	return (
		<div>
			<div className='headerForce'>
				<img src={logo} alt='Logo' width="50" height="50" /> <h1>Star Wars Fleet Battalion</h1>
			</div>
		</div>
	);
};

export default Header;
