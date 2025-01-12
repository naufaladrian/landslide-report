import React from 'react';
import { Link } from 'react-router-dom';

const ReportCard = ({ report }) => {
	return (
		<div className=' p-4 max-w-96 border rounded-md shadow-md bg-white flex flex-col gap-y-4'>
			<h1>{report.title}</h1>
			<img
				src={report.photo_url}
				alt={report.title}
				className=' aspect-video object-cover border rounded-md shadow-md w-full'
			/>
			<Link
				to={`/report/${report.id}`}
				className=' border-2 border-black rounded-md px-2 py-1 w-fit'
			>
				Detail
			</Link>
		</div>
	);
};

export default ReportCard;
