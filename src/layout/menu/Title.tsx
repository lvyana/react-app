/**
 * @file 模板
 * @author 姓名
 * @createDate
 */
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Router } from './routerData';
import { Button, Col, Row } from 'antd';
import IconFont from '@/utils/iconfont';
import { clearToken } from '@/utils/cookie';

export type TitleProps = {
	MenuTitle: Router | null;
	onBack: () => void;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Title: FC<TitleProps> = ({ MenuTitle, onBack }) => {
	const navigate = useNavigate();

	const onLogOut = () => {
		clearToken();
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

export default Title;
