import React, { FC } from 'react';
import { Button, Row, Col } from 'antd';
import IconFont from '@/utils/iconfont';
import type { FormItemCom } from '../type';

//按钮
export const formButton = (item: FormItemCom, onFinish?: (value: string) => void) => {
	return (
		<Row style={{ ...item.style }} wrap={false}>
			{item.option?.map((value, i) => {
				return (
					<Col key={i} className="ml10">
						<Button
							type={value.BTtype}
							onClick={() => onFinish && onFinish(value.type)}
							icon={value.iconType && <IconFont type={value.iconType} />}>
							{value.name}
						</Button>
					</Col>
				);
			})}
		</Row>
	);
};
