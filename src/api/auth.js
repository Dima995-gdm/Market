import axios from '@/api/axios';

const login = (credentials) => {
	axios.post('/auth/login', {credentials});
};

const getCurrentUser = (userID) => {
	axios.post(`/users/${userID}`);
};

export default {
	login,
	getCurrentUser
};