import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const history = useNavigate();

	useEffect(() => {
		const response = axiosInstance.post('user/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh'),
		});
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		axiosInstance.defaults.headers['Authorization'] = null;
		history('/login');
	});
	return <div>Logout</div>;
}