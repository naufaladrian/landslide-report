import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className=' bg-gray-50 flex flex-col min-h-dvh'>
			<Navbar />
			<main className=' container mx-auto flex-1 my-8'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
