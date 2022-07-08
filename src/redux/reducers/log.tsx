import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface logValue {
	time: string;
	text: string;
}

interface initialStateType {
	evryOne: logValue[];
}
let initialState: initialStateType = {
	evryOne: []
};
const log = createSlice({
	name: 'log',
	initialState,
	reducers: {
		setLog: (state, { payload, type }) => {
			state.evryOne = payload;
		}
	}
});

export const { setLog } = log.actions;
export const getEvryOne = (state: RootState) => state.log.evryOne;

export default log.reducer;
