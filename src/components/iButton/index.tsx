import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useHasPermiss from '@/useHooks/usePermissions';
import { Button } from 'antd';
import { IbuttonProps, BUTTONITEM } from './type';

/**
 * 按钮权限控制
 */
const Ibutton = ({ buttonList, loadingName, editBtn, style }: IbuttonProps) => {
	const size = useSelector((state: RootState) => state.layout.size);
	const { getPermiss } = useHasPermiss();
	return (
		<>
			{buttonList.map((item, i) =>
				getPermiss(item.hasPermiss) ? (
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
export type { IbuttonProps, BUTTONITEM };
