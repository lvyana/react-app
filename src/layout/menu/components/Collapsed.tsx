/**
 * @file 左侧菜单缩放
 * @author ly
 * @createDate 2023年6月17日
 */
import React, { FC, ReactPortal, useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { GET_LEFT_MENU_COLLAPSED, SET_LEFT_MENU_COLLAPSED, SET_MENU_LAYOUT } from '@/store/reducers/layout';
import { createPortal } from 'react-dom';

type CollapsedProps = {
	collapsed: boolean;
	onTrigger: () => void;
};

const COLLAPSED_STYLE: React.CSSProperties = {
	width: 48,
	height: 48
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Collapsed: FC<CollapsedProps> = ({ collapsed, onTrigger }) => {
	return (
		<Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={onTrigger} style={COLLAPSED_STYLE} />
	);
};

export const useCollapsed = () => {
	const collapsed = useAppSelector(GET_LEFT_MENU_COLLAPSED);

	const dispatch = useAppDispatch();

	const onTrigger = () => {
		if (collapsed) {
			dispatch(SET_MENU_LAYOUT(2));
		} else {
			dispatch(SET_MENU_LAYOUT(3));
		}

		dispatch(SET_LEFT_MENU_COLLAPSED(!collapsed));
	};

	const [collapsedPortal, setCollapsedPortal] = useState<ReactPortal | null>(null);

	useEffect(() => {
		const collapsedDom = document.getElementById('collapsed');
		if (collapsedDom) {
			const collapsedPortalDom = createPortal(<Collapsed collapsed={collapsed} onTrigger={onTrigger}></Collapsed>, collapsedDom);
			setCollapsedPortal(collapsedPortalDom);
		}
	}, [collapsed]);

	return { collapsedPortal, collapsed };
};

export default Collapsed;
