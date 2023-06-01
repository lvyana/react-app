import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Icard from './index';
describe('Icard component', () => {
	test('renders card with children and click event', () => {
		const onClickMock = jest.fn();
		render(
			<Icard onClick={onClickMock}>
				<div>Test card content</div>
			</Icard>
		);
		const cardContent = screen.getByText('Test card content');
		fireEvent.click(cardContent);
		expect(onClickMock).toHaveBeenCalled();
	});
});
