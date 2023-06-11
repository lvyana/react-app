/**
 * @file 卡片菜单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, memo, useRef, useLayoutEffect } from 'react';
import { Col, Popover, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import IconFont from '@/utils/iconfont';
import { useAppSelector } from '@/store';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import Icard from '@/antdComponents/iCard';
import findNode from '@/utils/findNode';
import findParentNode from '@/utils/findParentNode';
import Title from './components/Title';
import menuLogo from '@/assets/images/menu.png';
import { Router } from './routerData';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const CradMenu = () => {
	const LayoutLogo: React.CSSProperties = {
		width: '64px',
		height: '64px',
		backgroundImage: `url(${menuLogo})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		// background: `${token.colorBgBase} url(${menuLogo}) no-repeat center`,
		backgroundSize: 'contain'
	};

	return (
		<Popover content={<Menu></Menu>} overlayStyle={{ width: 336 }} arrow={false} placement="bottomLeft" trigger="click">
			<div style={LayoutLogo} className="cursor-pointer" />
		</Popover>
	);
};

const Menu = () => {
	const navigate = useNavigate();

	const location = useLocation();

	// 路由信息
	const menuList = useAppSelector(GET_ROUTER);

	// 历史菜单记录
	const historyMenuList = useRef<Router[]>([]);

	// 当前菜单
	const [currentMenu, setCurrentMenu] = useState<Router | null>(null);

	useLayoutEffect(() => {
		// 添加历史记录
		let initHistoryMenuList: Router[] = [];
		let isFind = true;
		let path = location.pathname;

		while (isFind) {
			const parentNode = findParentNode(menuList, path, 'path', 'children');
			if (parentNode) {
				initHistoryMenuList.unshift(parentNode);
				path = parentNode.path;
			} else {
				initHistoryMenuList.unshift({ title: '系统', path: '/', icon: 'icon-shezhi', children: menuList });
				isFind = false;
			}
		}
		historyMenuList.current = initHistoryMenuList;

		// 初始化当前菜单
		const initCurrentMenu = findParentNode(menuList, location.pathname, 'path', 'children');
		if (initCurrentMenu) {
			setCurrentMenu(initCurrentMenu);
		} else {
			setCurrentMenu({ title: '系统', path: '/', icon: 'icon-shezhi', children: menuList });
		}
	}, []);

	// 点击菜单事件
	const onMenuClick = (menu: Router) => {
		const nextMenu = findNode(menuList, 'path', menu.path);

		if (nextMenu?.children) {
			historyMenuList.current = [...historyMenuList.current, nextMenu];
			setCurrentMenu(nextMenu);
		} else {
			navigate(menu.path);
		}
	};

	// 返回上一层菜单
	const onBack = () => {
		if (historyMenuList.current.length > 1) {
			const copyHistoryMenuList = [...historyMenuList.current];
			copyHistoryMenuList.pop();
			historyMenuList.current = copyHistoryMenuList;
			setCurrentMenu(copyHistoryMenuList[copyHistoryMenuList.length - 1]);
		}
	};

	// 当前路由卡片样式
	const currentPathStyle = (path: string) => {
		if (location.pathname.indexOf(path) > -1) {
			return {
				boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
				borderColor: 'transparent'
			};
		}
	};

	return (
		<div>
			<Title MenuTitle={currentMenu} onBack={onBack}></Title>
			<Row gutter={8}>
				{currentMenu?.children?.map((menu) => {
					if (menu.show === false) return null;
					return (
						<Col flex="80px" className="mb-2" key={menu.path} onClick={() => onMenuClick(menu)}>
							<Icard bodyStyle={{ padding: 4 }} style={{ ...currentPathStyle(menu.path) }} className="text-center" hoverable={true}>
								<IconFont type={menu.icon || ''}></IconFont>
								<div>{menu.title}</div>
							</Icard>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default memo(CradMenu);
