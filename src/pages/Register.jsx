import React, { useState } from 'react';
import { api } from '../axios/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: '',
		name: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(form);
		try {
			api.post('/auth/register', form).then((res) => {
				navigate('/login');
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form className=' flex flex-col gap-y-4' onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={handleChange}
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					onChange={handleChange}
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					onChange={handleChange}
					id='password'
					className=' border-slate-800 border-2 rounded-md p-2'
				/>
				<button
					className=' bg-blue-600 text-white py-1 px-2 rounded-md font-semibold h-fit'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
}
