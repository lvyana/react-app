import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

/**
 * @param size 组件尺寸类型
 */
interface initialStateParams {
	size: SizeType;
}
let initialState: initialStateParams = {
	size: 'middle'
};

const layout = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		editorSize: (state, { payload, type }) => {
			state.size = payload;
		}
	}
});

export const { editorSize } = layout.actions;
export const getSize = (state: RootState) => state.layout.size;

export default layout.reducer;
