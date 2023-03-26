/**
 * @file 实现标签页
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import menuList, { Router } from '@/layout/menuList/routerData';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';
import useThemeHooks from '@/config/theme/useThemeHooks';
import style from './index.module.scss';

type ACTION = 'add' | 'remove';

/**
 * @param title 名称
 * @param path 路径
 * @param disabled 禁用某一项
 * @param closable 是否能关闭某一项
 */
interface PanesParams {
	title: string | undefined;
	path: string;
	disabled: boolean;
	closable: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const TabsMain = () => {
	const { token } = useThemeHooks();

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
		const { pathname, search, state } = location;

		if (pathname !== '/') {
			setActiveKey(pathname + search);

			let title: string | undefined = '';
			if (search || state) {
				title = '场景';
			} else {
				const menuItem = menuArr.find((item) => item.path === pathname);
				title = menuItem?.title;
			}
			// const { title } = menuArr.find((item) => item.path === pathname) || { title: '' };
			// 优化 or(if (!title) return;)
			if (!title) return;

			if (panes.length === 0) {
				setPanes([{ title, path: pathname + search, disabled: false, closable: false }]);
			} else {
				const isRepetition = panes.findIndex((item) => item.path === pathname + search);

				if (isRepetition === -1) {
					setPanes([...panes, { title, path: pathname + search, disabled: false, closable: true }]);
				}
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
		<div className={style['tabs']}>
			<Tabs
				style={{ color: token.colorTextBase, backgroundColor: token.colorBgLayout }}
				hideAdd
				onChange={onChange}
				activeKey={activeKey}
				type="editable-card"
				onEdit={onEdit}
				size={size}
				items={panes.map((item) => getTabs(item.title, item.path, item.disabled, item.closable))}></Tabs>
		</div>
	);
};
export default TabsMain;

const getTabs = (label: ReactNode, key: string, disabled: boolean, closable: boolean) => {
	return { label, key, disabled, closable };
};
