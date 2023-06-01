import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Ibutton from './index';
import { ButtonItemParams } from './type';
import { Provider } from 'react-redux';
import store from '@/store';
import matchMediaMock from 'match-media-mock';

describe('Ibutton component', () => {
	const buttonList: ButtonItemParams<'submit' | 'cancel' | 'reset'>[] = [
		{ type: 'submit', name: '提交', span: 8, permission: 'permission1' },
		{ type: 'cancel', name: '取消', span: 8, permission: 'permission2' },
		{ type: 'reset', name: '重置', span: 8, permission: 'permission3' }
	];
	let matchMedia;
	beforeAll(() => {
		matchMedia = matchMediaMock.create();
		window.matchMedia = matchMedia;
	});
	// afterAll(() => {
	// 	window.matchMedia = undefined;
	// });

	it('should render all buttons correctly', () => {
		const { getByText, getAllByRole } = render(
			<Provider store={store}>
				<Ibutton buttonList={buttonList} />
			</Provider>
		);
		buttonList.forEach((button, i) => {
			const items = getAllByRole('button');
			expect(items[i]).toHaveTextContent(button.name.replace(/(.)(?!$)/g, '$1 '));
		});
	});
	it('should call onClick handler when a button is clicked', () => {
		const onClick = jest.fn();
		const { getAllByRole } = render(
			<Provider store={store}>
				<Ibutton buttonList={buttonList} onClick={onClick} />
			</Provider>
		);

		buttonList.forEach((button, i) => {
			const items = getAllByRole('button');
			fireEvent.click(items[i]);
			expect(onClick).toHaveBeenCalledWith(button.type, button);
		});
	});
});
