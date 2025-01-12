import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../axios/api';
import { useSelector } from 'react-redux';

const ReportItem = ({ report, reFetch }) => {
	const token = useSelector((state) => state.auth.token);
	const handleDelete = () => {
		try {
			api
				.delete(`/reports/${report.id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(reFetch());
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className=' w-full bg-white border rounded-md shadow-md p-2 flex justify-between '>
			<div className=' flex flex-col gap-y-2 '>
				<h1 className='font-bold capitalize'>{report.title}</h1>
				<p>Status : {report.status}</p>
				<div className='flex gap-4'>
					<Link
						className=' text-blue-600 underline'
						to={`/report/${report.id}`}
					>
						View
					</Link>
				</div>
			</div>
			<button
				onClick={handleDelete}
				className=' bg-red-600 text-white py-1 px-2 rounded-md font-semibold h-fit'
			>
				Delete
			</button>
		</div>
	);
};

export default ReportItem;
