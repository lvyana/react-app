/**
 * @file router 参数
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Icard from '@/antdComponents/iCard';
import { Button } from 'antd';

const RouterDemo = () => {
	const navigate = useNavigate();
	const onRender = (type: number) => {
		if (type === 1) {
			navigate(`/router/RouterDemo/${type}`, { state: { asd: '123' }, replace: true });
		} else if (type === 2) {
			navigate(`/router/RouterDemo/list?ab=123`, { replace: true });
		}
	};
	return (
		<Icard>
			RouterCom
			<Button type="link" onClick={() => onRender(1)}>
				加载test
			</Button>
			<Button type="link" onClick={() => onRender(2)}>
				加载list
			</Button>
			<Outlet />
		</Icard>
	);
};

export default RouterDemo;
