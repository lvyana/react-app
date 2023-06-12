/**
 * @file 顶部导航栏-标签页
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import menuList, { Router } from '@/layout/menu/routerData';
import useThemeHooks from '@/config/antd/theme/useThemeHooks';
import style from './index.module.scss';

type ACTION = 'add' | 'remove';

/**
 * @param title 名称
 * @param path 路径
 * @param key tab选中的key
 * @param disabled 禁用某一项
 * @param closable 是否能关闭某一项
 */
interface PanesParams {
	title: string | undefined;
	path: string;
	key: string;
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
			let key: string | undefined = '';
			let title: string | undefined = '';

			// 路由表有对应的pathname
			const menuItem = menuArr.find((item) => item.path === pathname);
			title = menuItem?.title;
			key = menuItem?.path || pathname;

			// 路由表没有对应的pathname 取父级的参数
			if (!menuItem) {
				// 有参数取父级
				if (search || state) {
					const menuItem = menuArr.find((item) => pathname.indexOf(item.path) > -1);
					key = menuItem?.path || pathname;
					title = menuItem?.title;
				} else {
					return;
				}
			}

			if (panes.length === 0) {
				setPanes([{ title, path: pathname, key, disabled: false, closable: false }]);
			} else {
				const isRepetition = panes.findIndex((item) => {
					return item.key === key;
				});

				if (isRepetition === -1) {
					setPanes([...panes, { title, path: pathname, key, disabled: false, closable: true }]);
				}
			}

			setActiveKey(key);
		}
	}, [location]);

	const onChange = (activeKey: string) => {
		navigate(activeKey);
		setActiveKey(activeKey);
	};

	// 删除
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

	return (
		<div className={style['tabs'] + ' mb-2'}>
			<Tabs
				style={{ color: token.colorTextBase, backgroundColor: token.colorBgLayout }}
				hideAdd
				onChange={onChange}
				activeKey={activeKey}
				type="editable-card"
				onEdit={onEdit}
				items={panes.map((item) => getTabs(item.title, item.key, item.disabled, item.closable))}></Tabs>
		</div>
	);
};
export default TabsMain;

const getTabs = (label: ReactNode, key: string, disabled: boolean, closable: boolean) => {
	return { label, key, disabled, closable };
};
