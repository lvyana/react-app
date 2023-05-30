import React from 'react';
import { shallow } from 'enzyme';
import IbuttonItem, { IbuttonItemProps } from './IbuttonItem';
import { ButtonItemParams } from './type';

describe('IbuttonItem component', () => {
	const buttonItem: ButtonItemParams<string> = {
		type: 'submit',
		name: '提交',
		btnType: 'primary'
	};
	const props: IbuttonItemProps<string> = {
		buttonItem,
		onClick: jest.fn(),
		loadingName: 'submit'
	};
	it('should render correctly', () => {
		const wrapper = shallow(<IbuttonItem {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should call onClick handler when clicked', () => {
		const wrapper = shallow(<IbuttonItem {...props} />);
		wrapper.find('Button').simulate('click');
		expect(props.onClick).toHaveBeenCalledWith(buttonItem.type, buttonItem);
	});
	it('should disable button when buttonItem.disabled is true', () => {
		const wrapper = shallow(<IbuttonItem {...props} buttonItem={{ ...buttonItem, disabled: true }} />);
		expect(wrapper.find('Button').prop('disabled')).toBe(true);
	});
	it('should show loading spinner when loadingName matches buttonItem.type', () => {
		const wrapper = shallow(<IbuttonItem {...props} />);
		expect(wrapper.find('Button').prop('loading')).toBe(true);
	});
	it('should render iconFont if buttonItem.iconFont is provided', () => {
		const iconFont = <span>icon</span>;
		const wrapper = shallow(<IbuttonItem {...props} buttonItem={{ ...buttonItem, iconFont }} />);
		expect(wrapper.contains(iconFont)).toBe(true);
	});
	it('should render name prop as button text', () => {
		const wrapper = shallow(<IbuttonItem {...props} />);
		expect(wrapper.find('Button').text()).toBe(buttonItem.name);
	});
});
