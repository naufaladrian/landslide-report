import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className=' bg-slate-800 text-white'>
			<div className='container mx-auto p-4 flex justify-between'>
				<div className=' text-xl font-semibold'>
					<h1>LandSlide Report</h1>
				</div>
				<div className=' text-lg space-x-3'>
					<Link to='/'>Home</Link>
					<Link to='/admin/report/list'>Report</Link>
					<Link to='/login'>Login</Link>
					<Link to='/register'>Register</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
