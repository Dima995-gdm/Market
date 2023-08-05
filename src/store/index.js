import { createStore } from 'vuex';
import authApi from '@/api/auth';

export const store = createStore({
	state: {
		isSubmitting: false,
		currentUser: null,
		validationErrors: null,
		isLoggedIn: null
	},

	mutations: {
		loginStart(state) {
			state.isSubmitting = true;
			state.validationErrors = null;
		},
		loginSuccess(state, payload) {
			state.isSubmitting = false;
			state.currentUser = payload;
			state.isLoggedIn = true;
		},
		loginFailure(state, payload) {
			state.isSubmitting = false;
			state.validationErrors = payload;
		}
	},

	actions: {
		login(context, credentials) {
			
		}
	}
});