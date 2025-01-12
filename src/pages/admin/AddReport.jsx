import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../axios/api';
import { useSelector } from 'react-redux';

export const AddReport = () => {
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);
	const [form, setForm] = useState({
		title: '',
		description: '',
		latitude: '',
		longitude: '',
	});
	const [file, setFile] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append('longitude', form.longitude);
		data.append('latitude', form.latitude);
		data.append('title', form.title);
		data.append('description', form.description);
		data.append('image', file);
		try {
			api
				.post('/reports', data, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					navigate('/admin/report/list');
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form className=' flex flex-col gap-y-4' onSubmit={handleSubmit}>
				<label htmlFor='text'>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					onChange={handleChange}
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<label htmlFor='text'>Description</label>
				<input
					type='text'
					name='description'
					onChange={handleChange}
					id='description'
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<label htmlFor='text'>latitude</label>
				<input
					type='text'
					name='latitude'
					onChange={handleChange}
					id='latitude'
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<label htmlFor='text'>longitude</label>
				<input
					type='text'
					name='longitude'
					onChange={handleChange}
					id='longitude'
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<input type='file' onChange={(e) => setFile(e.target.files[0])} />
				<button
					className=' bg-blue-600 text-white py-1 px-2 rounded-md font-semibold h-fit'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};
