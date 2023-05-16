/**
 * @file 按钮集合
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import authButtonPermissionHoc from '@/hoc/authButtonPermissionHoc';
import IbuttonItem from './IbuttonItem';
import type { ButtonItemParams, OnClickBtn } from './type';

/**
 * @param buttonList 按钮集合
 * @param loadingName 那个按钮需要加载直接传type
 * @param onClick 按钮事件
 */
export interface IbuttonProps<T> {
	buttonList: ButtonItemParams<T>[];
	loadingName?: T;
	onClick?: OnClickBtn<T>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 按钮集合
const Ibutton = <T,>({ buttonList, loadingName, onClick }: IbuttonProps<T>) => {
	const buttonListCol = buttonList.map((item, i) => {
		const IbuttonItemCol = (
			<Col span={item.span}>
				<IbuttonItem buttonItem={item} loadingName={loadingName} onClick={onClick} />
			</Col>
		);

		return <Fragment key={i}>{authButtonPermissionHoc(IbuttonItemCol, item.permission)}</Fragment>;
	});

	return <Row>{buttonListCol}</Row>;
};

// 单个按钮

export default Ibutton;
