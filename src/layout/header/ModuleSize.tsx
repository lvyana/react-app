import React, { useState } from 'react';
import { Button, Dropdown, Tooltip, Menu } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SET_SIZE, GET_SIZE } from '@/store/reducers/layout';
import styles from './index.module.less';

const ModuleSize = () => {
	// 尺寸
	const dispatch = useAppDispatch();
	const sizeR = useAppSelector(GET_SIZE);
	const [size, setsize] = useState(sizeR);
	const handleSizeChange = ({ key }: { key: string }) => {
		setsize(key as SizeType);
		dispatch(SET_SIZE(key as SizeType));
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
			<Dropdown overlay={sizeMenu} placement="bottom" trigger={['click']} overlayClassName={styles['Layout-Dropdown']}>
				<Button type="link" icon={<FontSizeOutlined />}></Button>
			</Dropdown>
		</>
	);
};
export default ModuleSize;
