import React, { useEffect, useState } from 'react';
import { api } from '../../axios/api';
import ReportItem from '../../components/ReportItem';
import { Link } from 'react-router-dom';

const ReportList = () => {
	const [reports, setReports] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = () => {
		api.get('/reports').then((res) => {
			setReports(res.data);
			setLoading(false);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className='flex justify-between items-center mb-8'>
				<h1 className=' text-4xl font-bold mb-4'>Admin : Report List</h1>
				<Link
					to={'/admin/report/add'}
					className=' text-lg bg-blue-800 text-white py-1 px-2 rounded-md font-semibold h-fit'
				>
					Post Report
				</Link>
			</div>
			{loading && <p>Loading...</p>}
			<div className='flex gap-x-8 flex-wrap gap-y-4'>
				{reports.map((report) => (
					<ReportItem
						key={report.id}
						report={report}
						reFetch={() => getData()}
					/>
				))}
			</div>
		</div>
	);
};

export default ReportList;
