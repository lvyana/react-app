import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface logValue {
	time: string;
	text: string;
}

interface initialStateType {
	everyOne: logValue[];
}
let initialState: initialStateType = {
	everyOne: []
};
const log = createSlice({
	name: 'log',
	initialState,
	reducers: {
		SET_EVERY_ONE: (state, { payload, type }) => {
			state.everyOne = payload;
		}
	}
});

export const { SET_EVERY_ONE } = log.actions;
export const GET_EVERY_ONE = (state: RootState) => state.log.everyOne;

export default log.reducer;
