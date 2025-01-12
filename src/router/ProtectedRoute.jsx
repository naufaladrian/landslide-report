import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	}, [token, navigate]);

	return <Outlet />;
};

export default ProtectedRoute;
