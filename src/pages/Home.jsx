import React, { useEffect, useState } from 'react';
import { api } from '../axios/api';
import ReportCard from '../components/ReportCard';

const Home = () => {
	const [reports, setReports] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		try {
			api.get('/reports').then((res) => {
				setReports(res.data);
				setLoading(false);
			});
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, []);

	return (
		<>
			<h1 className=' text-4xl font-bold mb-4'>Report List</h1>
			{loading && <p>Loading...</p>}
			<div className='flex gap-x-8 flex-wrap'>
				{reports.map((report) => (
					<ReportCard key={report.id} report={report} />
				))}
			</div>
		</>
	);
};

export default Home;
