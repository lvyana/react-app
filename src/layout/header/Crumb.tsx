import React, { useState, useEffect } from 'react';
import { Breadcrumb, Menu } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { menuList, router, excludeMenu } from '../menuList/index';

const Crumb = () => {
	const location = useLocation();
	const [currentRouter, SetcurrentRouter] = useState<router[]>([]);

	useEffect(() => {
		console.log(location.pathname);
		if (location.pathname.indexOf(excludeMenu[0]) !== -1) return;
		let routerArr: router[] = [];
		location.pathname.split('/').map((item, i) => {
			if (i === 0) {
				routerArr[0] = { path: '/', title: '系统', key: '/', children: menuList };
			} else {
				let is = routerArr[i - 1].children?.find((val) => {
					return val.path.indexOf(item) !== -1;
				});
				if (is) routerArr[i] = is;
			}
		});
		console.log(routerArr);

		SetcurrentRouter(routerArr);
	}, [location.pathname]);

	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer">
					General
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer">
					Layout
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer">
					Navigation
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<div style={{ paddingLeft: '27px' }}>
			<Breadcrumb>
				{currentRouter.map((item, i) => {
					return item.children ? (
						<Breadcrumb.Item key={item.path} overlay={CrumbMenus(item.children, currentRouter[i + 1]?.path)}>
							<a>{item.title}</a>
						</Breadcrumb.Item>
					) : (
						<Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</div>
	);
};
export default Crumb;

const CrumbMenus = (menu: router[], current: string) => {
	console.log(menu, current);
	return (
		<Menu selectedKeys={[current]}>
			{menu?.map((item) => {
				return item.show === false ? (
					''
				) : (
					<Menu.Item key={item.path}>
						<Link to={item.path}> {item.title}</Link>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};
