import { defineStore } from 'pinia';
import moment from 'moment';

export const useMyGlobal_functionsStore = defineStore('myGlobal_functionsStore', ()=> {

	const getMomentTime = (time: any) => {
		const newDate = moment(time).format("HH:mm")
		return newDate;
	}

	const getFormattedTime = (time: any) => {
		const newTime = new Date(time);
		return newTime.toLocaleTimeString('en-ZA');
	}

	const getFormattedDate = (date: any) => {
		const newDate = new Date(date);

		return newDate.toLocaleDateString('en-CA');
	}

	return {
		getMomentTime,
		getFormattedTime,
		getFormattedDate
	}


})
