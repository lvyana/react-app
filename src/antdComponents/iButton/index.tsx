/**
 *	@name 实现权限按钮
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import useHasPermiss from '@/useHooks/usePermissions';
import { Button } from 'antd';
import { IbuttonProps, ButtonItemParams, BTeditBtn } from './type';

const Ibutton = ({ buttonList, loadingName, editBtn, style }: IbuttonProps) => {
	const size = useAppSelector(GET_SIZE);
	const { hasPermiss } = useHasPermiss();
	return (
		<>
			{buttonList.map((item, i) =>
				hasPermiss(item.hasPermiss) ? (
					<Button
						key={i}
						type={item.btType}
						onClick={() => editBtn && editBtn(item.type, item)}
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
export type { IbuttonProps, ButtonItemParams, BTeditBtn };
