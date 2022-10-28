/**
 *	@name 实现标签页
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import menuList, { Router } from '@/layout/menuList/routerData';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';

type ACTION = 'add' | 'remove';

interface PanesParams {
	title: string | undefined;
	path: string;
	disabled: boolean;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const TabsMain = () => {
	const [panes, setPanes] = useState<Array<PanesParams>>([]);
	const [activeKey, setActiveKey] = useState<string>();
	const location = useLocation();
	const navigate = useNavigate();

	// 扁平化菜单数据
	const getMenuArr = (arr: Router[]): Router[] => {
		return arr.reduce((pre: Router[], item) => {
			if (item.children && item.children.length > 0) {
				return [...pre, ...getMenuArr(item.children)];
			} else {
				return [...pre, item];
			}
		}, []);
	};

	const menuArr = useMemo(() => {
		return getMenuArr(menuList);
	}, []);

	// 监听地址变化 生成tabs
	useEffect(() => {
		const { pathname } = location;
		setActiveKey(pathname);

		const { title } = menuArr.find((item) => item.path === pathname) || { title: '看场景命名' };
		//优化 or (if (!title) return;)

		if (panes.length === 0) {
			setPanes([{ title, path: pathname, disabled: true }]);
		} else {
			const isRepetition = panes.findIndex((item) => item.path === pathname);

			if (isRepetition === -1) {
				setPanes([...panes, { title, path: pathname, disabled: false }]);
			}
		}
	}, [location]);

	const onChange = (activeKey: string) => {
		navigate(activeKey);
		setActiveKey(activeKey);
	};

	const onEdit = (targetKey: string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>, action: ACTION): void => {
		// if (panes.length === 1) return;
		let a = panes.filter((item) => {
			return item.path !== targetKey;
		});
		setPanes(a);
		if (targetKey === location.pathname) {
			onChange(a[a.length - 1].path);
		}
	};

	const size = useAppSelector(GET_SIZE);

	return (
		<>
			<Tabs
				hideAdd
				onChange={onChange}
				activeKey={activeKey}
				type="editable-card"
				onEdit={onEdit}
				size={size}
				items={panes.map((item) => getTabs(item.title, item.path, item.disabled))}></Tabs>
		</>
	);
};
export default TabsMain;

const getTabs = (label: ReactNode, key: string, disabled: boolean) => {
	return { label, key, disabled };
};
