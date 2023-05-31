/**
 * @file 实现左侧菜单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { useState, useEffect, memo, useRef, useLayoutEffect, FC } from 'react';
import { Button, Col, MenuProps, Row } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import IconFont from '@/utils/iconfont';
import { useAppSelector } from '@/store';
import { GET_ROUTER } from '@/store/reducers/globalConfig';
import Icard from '@/antdComponents/iCard';
import findNode from '@/utils/findNode';
import findParentNode from '@/utils/findParentNode';

type TitleProps = {
	MenuTitle: Router | null;
	onBack: () => void;
};

/**
 * @param title 标题
 * @param path 路径
 * @param icon 图标
 * @param show 显示、隐藏
 * @param children 子级
 */
export interface Router {
	title: string;
	path: string;
	icon?: string;
	show?: boolean;
	children?: Router[];
}

export const EXCLUDE_MENU = ['role/allocation'];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Menu = () => {
	const navigate = useNavigate();

	const location = useLocation();

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

export default memo(Menu);

const Title: FC<TitleProps> = ({ MenuTitle, onBack }) => {
	const navigate = useNavigate();

	const onLogOut = () => {
		navigate('/login');
	};

	return (
		<>
			<Row justify="space-between">
				<Col>
					<Button
						type="link"
						icon={<IconFont type={MenuTitle?.path === '/' ? MenuTitle.icon || '' : 'icon-fanhui'}></IconFont>}
						className="mb-2"
						onClick={onBack}>
						{MenuTitle?.title}
					</Button>
				</Col>
				<Col>
					<Button danger type="link" onClick={onLogOut} icon={<IconFont type="icon-tuichu"></IconFont>}>
						退出
					</Button>
				</Col>
			</Row>
		</>
	);
};
