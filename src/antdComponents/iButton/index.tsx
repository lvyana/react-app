/**
 * @file 封装权限按钮
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { Children, FC, Fragment, ReactElement } from 'react';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';
import { Button, Col, Row } from 'antd';
import IconFont from '@/utils/iconfont';
import { ButtonItemParams, OnClickBtn } from './type';
import authButtonPermissionHoc from '@/hoc/authButtonPermissionHoc';

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

/**
 * @param buttonItem 按钮
 */
export interface IbuttonItemProps<T> extends Omit<IbuttonProps<T>, 'buttonList'> {
	buttonItem: ButtonItemParams<T>;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

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

export const IbuttonItem = <T,>({ buttonItem, loadingName, onClick }: IbuttonItemProps<T>) => {
	const size = useAppSelector(GET_SIZE);

	return (
		<Button
			type={buttonItem.btType}
			onClick={() => onClick && onClick(buttonItem.type, buttonItem)}
			disabled={buttonItem.disabled === true}
			loading={loadingName === buttonItem.type}
			size={size}
			className={buttonItem.className}
			icon={(() => {
				if (buttonItem.iconFont) {
					if (typeof buttonItem.iconFont === 'string') {
						return <IconFont type={buttonItem.iconFont}></IconFont>;
					} else if (React.isValidElement(buttonItem.iconFont)) {
						return buttonItem.iconFont;
					}
					return <></>;
				}
			})()}
			block={buttonItem.block}
			style={buttonItem.style}>
			{buttonItem.name}
		</Button>
	);
};

export default Ibutton;
export type { ButtonItemParams, OnClickBtn };
