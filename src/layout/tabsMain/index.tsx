import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { menuList, router } from '@/layout/menuList/index';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';

const { TabPane } = Tabs;
type ACTION = 'add' | 'remove';

const TabsMain = () => {
	const [panes, setpanes] = useState<Array<{ path: string; key: string; closable: boolean }>>([]);
	const [activeKey, setactiveKey] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	// 监听地址变化 tag新增
	useEffect(() => {
		// 数组扁平化
		const router: router[] = menuList.reduce((pre: router[], cur) => {
			return cur.children ? pre.concat(cur.children) : pre.concat(cur);
		}, []);
		let currentRouter = router.find((item) => {
			// 判断不显示在菜单的组件
			if (item.show === false) return location.pathname.indexOf(item.path) !== -1;
			return item.path === location.pathname;
		});

		if (!currentRouter) return;
		if (panes.length < 1) {
			setpanes([
				{
					path: currentRouter.title,
					key: location.pathname,
					closable: false
				}
			]);
		} else {
			let a = panes.find((item) => {
				return item.key === location.pathname;
			});

			if (a === undefined) {
				setpanes([
					...panes,
					{
						path: currentRouter.title,
						key: location.pathname,
						closable: true
					}
				]);
			}
		}
		setactiveKey(location.pathname);
		return () => {
			setactiveKey(location.pathname);
		};
	}, [location, panes]);

	const onChange = (activeKey: string) => {
		navigate(activeKey);
		setactiveKey(activeKey);
	};

	const onEdit = (targetKey: string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>, action: ACTION): void => {
		// this[action](targetKey);
		if (panes.length === 1) return;
		let a = panes.filter((item) => {
			return item.key !== targetKey;
		});
		setpanes(a);
		if (targetKey === location.pathname) {
			onChange(a[a.length - 1].key);
		}
	};
	useEffect(() => {
		if (!panes.length) return;
	}, [panes]);
	const size = useAppSelector(GET_SIZE);
	return (
		<>
			<Tabs hideAdd onChange={onChange} activeKey={activeKey} type="editable-card" onEdit={onEdit} size={size}>
				{panes.map((pane) => (
					<TabPane tab={pane.path} key={pane.key} closable={pane.closable}></TabPane>
				))}
			</Tabs>
		</>
	);
};
export default TabsMain;
