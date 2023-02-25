/**
 * @file 按钮
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Button, Row, Col } from 'antd';
import Ibutton from '@/antdComponents/iButton';
import type { FormItemMap } from '../type';

export const formButton: FormItemMap['button'] = (item) => {
	return (
		<div style={{ ...item.style }}>
			<Ibutton buttonList={item.option || []} onClick={item.onClick}></Ibutton>
		</div>
	);
};
