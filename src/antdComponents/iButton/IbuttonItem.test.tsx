import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import IbuttonItem from './IbuttonItem';
import type { ButtonItemParams } from './type';

describe('<IbuttonItem />', () => {
	const mockOnClick = jest.fn();
	const mockButton: ButtonItemParams<'primary'> = {
		type: 'primary',
		name: 'Click Me',
		btnType: 'primary',
		disabled: false,
		className: 'custom-btn',
		block: false
	};
	it('组件是否正确地渲染了按钮文字', () => {
		render(<IbuttonItem buttonItem={mockButton} />);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});
	it('iconFont为string时 组件是否正确地渲染了icon', () => {
		render(<IbuttonItem buttonItem={{ ...mockButton, iconFont: 'icon-font' }} />);
		const icon = screen.getByRole('img');
		const xlinkHref = icon.querySelector('svg use')?.getAttribute('xlink:href');
		expect(xlinkHref).toBe('#icon-font');
	});
	it('iconFont为组件时 组件是否正确地渲染了icon', () => {
		render(<IbuttonItem buttonItem={{ ...mockButton, iconFont: <div>123</div> }} />);
		const icon = screen.getByText('123');
		expect(icon).toBeInTheDocument();
	});

	it('点击按钮时是否会触发传入的 onClick 回调函数', () => {
		render(<IbuttonItem buttonItem={mockButton} onClick={mockOnClick} />);
		const button = screen.getByText('Click Me');
		fireEvent.click(button);
		expect(mockOnClick).toHaveBeenCalledWith('primary', mockButton);
	});
	it('disabled 属性为 true 时，按钮是否被禁用', () => {
		render(<IbuttonItem buttonItem={{ ...mockButton, disabled: true }} />);
		const button = screen.getByRole('button', { name: 'Click Me' });

		expect(button).toBeDisabled();
	});
	it('加载状态为true时应该显示加载中的spinner', () => {
		render(<IbuttonItem buttonItem={mockButton} loading={true} />);

		const loading = screen.getByRole('img', { name: 'loading' });
		expect(loading).toBeInTheDocument();
	});
});
