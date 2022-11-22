/**
 *	@name 实现权限按钮
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC } from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import useHasPermiss from '@/useHooks/usePermissions';
import { Button } from 'antd';
import { ButtonItemParams, OnClickBtn } from './type';

/**
 * @param buttonList 按钮集合
 * @param loadingName 那个按钮需要加载直接传名字
 * @param onClickBtn 按钮事件
 */
export interface IbuttonProps<T> {
	buttonList: ButtonItemParams<T>[];
	loadingName?: string;
	onClickBtn?: OnClickBtn<T>;
	style?: React.CSSProperties;
}

const Ibutton = <T,>({ buttonList, loadingName, onClickBtn, style }: IbuttonProps<T>) => {
	const size = useAppSelector(GET_SIZE);
	const { hasPermiss } = useHasPermiss();
	return (
		<>
			{buttonList.map((item, i) =>
				hasPermiss(item.hasPermiss) ? (
					<Button
						key={i}
						type={item.btType}
						onClick={() => onClickBtn && onClickBtn(item.type, item)}
						disabled={item.disabled === true}
						loading={loadingName === item.name}
						size={size}
						style={{ ...style }}>
						{item.iconFont}
						{item.name}
					</Button>
				) : (
					<></>
				)
			)}
		</>
	);
};

export default Ibutton;
export type { ButtonItemParams, OnClickBtn };
