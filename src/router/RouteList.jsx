import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import ReportList from '../pages/admin/ReportList';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { AddReport } from '../pages/admin/AddReport';
import DetailReport from '../pages/DetailReport';
import Register from '../pages/Register';

export const routeList = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/report/:id',
				element: <DetailReport />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/admin',
				element: <ProtectedRoute />,
				children: [
					{
						path: 'report/list',
						element: <ReportList />,
					},
					{
						path: 'report/add',
						element: <AddReport />,
					},
				],
			},
		],
	},
]);
