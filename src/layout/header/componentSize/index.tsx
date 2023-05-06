/**
 *	@file 表格、表单组件大小
 *	@author ly
 *  @createDate 2020年4月27日
 */
import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useAppSelector, useAppDispatch } from '@/store';
import { SET_SIZE, GET_SIZE } from '@/store/reducers/layout';

const ComponentSize = () => {
	// 尺寸
	const dispatch = useAppDispatch();
	const size = useAppSelector(GET_SIZE);

	const handleSizeChange = ({ key }: { key: string }) => {
		dispatch(SET_SIZE(key as SizeType));
	};

	const sizeMenu = [
		{ key: 'small', label: 'small', disabled: size === 'small' },
		{ key: 'middle', label: 'middle', disabled: size === 'middle' },
		{ key: 'large', label: 'large', disabled: size === 'large' }
	];

	return (
		<>
			<Dropdown
				arrow={{ pointAtCenter: true }}
				getPopupContainer={() => document.getElementById('header-icon-function') as HTMLElement}
				menu={{ items: sizeMenu, onClick: handleSizeChange }}
				placement="bottom"
				trigger={['click']}>
				<Button type="link" icon={<FontSizeOutlined />}></Button>
			</Dropdown>
		</>
	);
};
export default ComponentSize;
