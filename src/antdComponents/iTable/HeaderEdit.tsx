import React, { FC, ReactNode, useCallback, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import IheaderConfig, { HeaderType } from '@/antdComponents/iEditHeader';

interface HeaderEditProps {
	children?: ReactNode;
	type: HeaderType;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const HeaderEdit: FC<HeaderEditProps> = ({ children, type }) => {
	const [headerOpen, setheaderOpen] = useState(false);
	const editHeader = () => {
		setheaderOpen(true);
	};

	const closeHeader = useCallback(() => {
		setheaderOpen(false);
	}, [headerOpen]);

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
			<IheaderConfig type={type} open={headerOpen} closeHeader={closeHeader}></IheaderConfig>
		</>
	);
};

export default HeaderEdit;
