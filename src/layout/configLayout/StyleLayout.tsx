/**
 * @file 模板
 * @author 姓名
 * @createDate
 */
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import layout from '@/assets/images/layout.jpg';
import layout1 from '@/assets/images/layout1.jpg';
import style from './index.module.scss';

type styleType = 1 | 2;
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const StyleLayout = () => {
	const [selectStyle, setselectStyle] = useState(1);

	const onSelectStyle = (value: styleType) => {
		setselectStyle(value);
	};

	const getStyle = (value: styleType) => {
		if (value === selectStyle) {
			return style['select-style'];
		}
		return '';
	};

	return (
		<div>
			<h2 className="mb-2 text-base">选择布局</h2>
			<Row gutter={32}>
				<Col className={getStyle(1)}>
					<img src={layout} alt="" className={'cursor-pointer '} onClick={() => onSelectStyle(1)} />
				</Col>
				<Col className={getStyle(2)}>
					<img src={layout1} alt="" className={'cursor-pointer '} onClick={() => onSelectStyle(2)} />
				</Col>
			</Row>
		</div>
	);
};

export default StyleLayout;
