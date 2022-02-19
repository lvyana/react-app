import React, { useState } from 'react';
import { Button, Dropdown, Tooltip, Menu } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { useDispatch, useSelector } from 'react-redux';
import { editorSize } from '@/redux/actions/layout';
import { RootState } from '@/redux/store';
const ModuleSize = () => {
	// 尺寸
	const dispatch = useDispatch();
	const sizeR = useSelector<RootState>((state) => state.layout.size);
	const [size, setsize] = useState(sizeR as SizeType);
	const handleSizeChange = ({ key }: { key: string }) => {
		setsize(key as SizeType);
		dispatch(editorSize(key as SizeType));
	};
	const sizeMenu = () => (
		<Menu onClick={handleSizeChange}>
			<Menu.Item key="small" disabled={size === 'small'}>
				small
			</Menu.Item>
			<Menu.Item key="middle" disabled={size === 'middle'}>
				middle
			</Menu.Item>
			<Menu.Item key="large" disabled={size === 'large'}>
				large
			</Menu.Item>
		</Menu>
	);
	return (
		<>
			<Dropdown overlay={sizeMenu} placement="bottomCenter" arrow trigger={['click']}>
				<Tooltip title="布局大小" placement="top" key="leftButton">
					<Button type="link" icon={<FontSizeOutlined />}></Button>
				</Tooltip>
			</Dropdown>
		</>
	);
};
export default ModuleSize;
