import React, { FC, ReactNode, useCallback, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import IheaderConfig, { HeaderType } from '@/components/iEditHeader';

interface HeaderEditProps {
	children?: ReactNode;
	type: HeaderType;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const HeaderEdit: FC<HeaderEditProps> = ({ children, type }) => {
	const [headerVisible, setheaderVisible] = useState(false);
	const editHeader = () => {
		setheaderVisible(true);
	};

	const closeHeader = useCallback(() => {
		setheaderVisible(false);
	}, [headerVisible]);

	return (
		<>
			<Row justify="space-between">
				<Col>{children}</Col>
				<Col>
					<Row>
						<Col>
							<Button type="link" icon={<SettingOutlined />} onClick={editHeader}></Button>
						</Col>
					</Row>
				</Col>
			</Row>
			<IheaderConfig type={type} visible={headerVisible} closeHeader={closeHeader}></IheaderConfig>
		</>
	);
};

export default HeaderEdit;
