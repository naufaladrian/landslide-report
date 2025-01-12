import React, { useEffect, useState } from 'react';
import { api } from '../axios/api';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailReport = () => {
	const [report, setreport] = useState({});
	const [status, setstatus] = useState('');
	const token = useSelector((state) => state.auth.token);
	const { id } = useParams();

	const updateStatus = (e) => {
		e.preventDefault();
		console.log(status);

		api.put(`/reports/${id}/status`, { status }).then((res) => {
			api.get(`/reports/${id}`).then((res) => {
				setreport(res.data);
			});
		});
	};
	useEffect(() => {
		api.get(`/reports/${id}`).then((res) => {
			setreport(res.data);
		});
	}, []);

	return (
		<div className='flex  gap-8'>
			<div className='flex-1'>
				<img src={report.photo_url} className=' rounded-md w-full' />
			</div>
			<div className='p-8'>
				<h1 className='font-bold'>{report.title}</h1>
				<p className='font-medium'>{report.despriction}</p>
				<p className='font-medium'>Latitude : {report.latitude}</p>
				<p className='font-medium'>Longitude : {report.longitude}</p>
				<p className='font-medium'>Status : {report.status}</p>

				<iframe
					width='300'
					height='170'
					frameborder='0'
					marginheight='0'
					marginwidth='0'
					src={`https://maps.google.com/maps?q=${report.latitude}+,${report.longitude}&hl=id&z=14&output=embed`}
				></iframe>

				{token && (
					<div>
						<form
							onSubmit={updateStatus}
							className='flex flex-col gap-y-3 mt-8'
						>
							<select
								onChange={(e) => setstatus(e.target.value)}
								className=' border-2 border-slate-600'
								value={status}
							>
								<option value='new'>New</option>
								<option value='progress'>progress</option>
								<option value='resolved'>resolved</option>
							</select>
							<button
								type='submit'
								className='bg-blue-600 text-white py-1 px-2 rounded-md font-semibold h-fit'
							>
								Submit
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default DetailReport;
