/**
 * @file 按钮
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC } from 'react';
import { Button, Row, Col } from 'antd';
import IconFont from '@/utils/iconfont';
import Ibutton from '@/antdComponents/iButton';
import type { FormItemMap } from '../type';

export const formButton: FormItemMap['button'] = (item) => {
	return (
		<Row style={{ ...item.style }} wrap={false}>
			<Ibutton buttonList={item.option || []} onClickBtn={item.onFinish}></Ibutton>
		</Row>
	);
};
