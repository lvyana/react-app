import React, { useState } from 'react';
import { Button, Dropdown, Tooltip, Menu } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SET_SIZE, GET_SIZE } from '@/store/reducers/layout';

const ModuleSize = () => {
	// 尺寸
	const dispatch = useAppDispatch();
	const sizeR = useAppSelector(GET_SIZE);
	const [size, setsize] = useState(sizeR);
	const handleSizeChange = ({ key }: { key: string }) => {
		setsize(key as SizeType);
		dispatch(SET_SIZE);
	};
	const sizeMenu = () => (
		<Menu
			onClick={handleSizeChange}
			items={[
				{ key: 'small', label: 'small', disabled: size === 'small' },
				{ key: 'middle', label: 'middle', disabled: size === 'middle' },
				{ key: 'large', label: 'large', disabled: size === 'large' }
			]}></Menu>
	);
	return (
		<>
			<Dropdown overlay={sizeMenu} placement="bottom" arrow trigger={['click']}>
				<Tooltip title="布局大小" placement="top" key="leftButton">
					<Button type="link" icon={<FontSizeOutlined />}></Button>
				</Tooltip>
			</Dropdown>
		</>
	);
};
export default ModuleSize;
