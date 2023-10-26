/**
 * @file 按钮集合
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import authButtonPermissionHoc from '@/hoc/authButtonPermissionHoc';
import IbuttonItem from '.';
import type { ButtonItemParams, OnClickBtn } from './type';

/**
 * 按钮集合
 * @param option 集合数据
 * @param loadingName 那个按钮需要加载直接传type
 * @method onClick 点击事件
 * @param style 样式
 */
export interface IbuttonListProps<T> {
	option: ButtonItemParams<T>[];
	loadingName?: T;
	onClick?: OnClickBtn<T>;
	style?: React.CSSProperties;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IbuttonList = <T,>({ option, loadingName, onClick, style }: IbuttonListProps<T>) => {
	const buttonListCol = option.map((item, i) => {
		const loading = loadingName === item.type;

		const IbuttonItemCol = (
			<Col span={item.span}>
				<IbuttonItem buttonItem={item} loading={loading} onClick={onClick} />
			</Col>
		);

		return <Fragment key={i}>{authButtonPermissionHoc(IbuttonItemCol, item.permission)}</Fragment>;
	});

	return <Row style={style}>{buttonListCol}</Row>;
};

export default IbuttonList;
