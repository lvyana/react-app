/**
 * @name 按钮
 * @user ly
 * @date 2023年1月3日
 */
import React, { FC } from 'react';
import { Button, Row, Col } from 'antd';
import IconFont from '@/utils/iconfont';
import type { FormItemMap } from '../type';

export interface IformButton {
	BTtype?: 'link' | 'text' | 'dashed' | 'default' | 'ghost' | 'primary' | undefined;
	type: string;
	name: string;
	iconType?: string;
}

export const formButton: FormItemMap['button'] = (item, onFinish) => {
	return (
		<Row style={{ ...item.style }} wrap={false}>
			{item.option?.map((value, i) => {
				return (
					<Col key={i} className="ml10">
						{value.iconType ? (
							<Button
								type={value.BTtype}
								onClick={() => onFinish && onFinish(value.type)}
								icon={value.iconType && <IconFont type={value.iconType} />}>
								{value.name}
							</Button>
						) : (
							<Button type={value.BTtype} onClick={() => onFinish && onFinish(value.type)}>
								{value.name}
							</Button>
						)}
					</Col>
				);
			})}
		</Row>
	);
};
