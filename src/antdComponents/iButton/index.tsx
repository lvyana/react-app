/**
 * @file 封装权限按钮
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC } from 'react';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';
import useHasPermiss from '@/useHooks/usePermissions';
import { Button, Col, Row } from 'antd';
import IconFont from '@/utils/iconfont';
import { ButtonItemParams, OnClickBtn } from './type';

/**
 * @param buttonList 按钮集合
 * @param loadingName 那个按钮需要加载直接传名字
 * @param onClick 按钮事件
 */
export interface IbuttonProps<T> {
	buttonList: ButtonItemParams<T>[];
	loadingName?: string;
	onClick?: OnClickBtn<T>;
	style?: React.CSSProperties;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ibutton = <T,>({ buttonList, loadingName, onClick }: IbuttonProps<T>) => {
	const size = useAppSelector(GET_SIZE);
	const { hasPermiss } = useHasPermiss();
	return (
		<Row>
			{buttonList.map(
				(item, i) =>
					hasPermiss(item.hasPermiss) && (
						<Col span={item.span} key={i}>
							<Button
								type={item.btType}
								onClick={() => onClick && onClick(item.type, item)}
								disabled={item.disabled === true}
								loading={loadingName === item.name}
								size={size}
								className={item.className}
								icon={(() => {
									if (item.iconFont) {
										if (typeof item.iconFont === 'string') {
											return <IconFont type={item.iconFont}></IconFont>;
										} else if (React.isValidElement(item.iconFont)) {
											return item.iconFont;
										}
										return <></>;
									}
								})()}
								block={item.block}
								style={item.style}>
								{item.name}
							</Button>
						</Col>
					)
			)}
		</Row>
	);
};

export default Ibutton;
export type { ButtonItemParams, OnClickBtn };
