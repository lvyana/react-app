import React from 'react';
import { useSelector } from 'react-redux';
import { GET_SIZE } from '@/store/reducers/layout';
import useHasPermiss from '@/useHooks/usePermissions';
import { Button } from 'antd';
import { IbuttonProps, ButtonItemParam } from './type';

/**
 * @return 按钮权限控制
 */
const Ibutton = ({ buttonList, loadingName, editBtn, style }: IbuttonProps) => {
	const size = useSelector(GET_SIZE);
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
export type { IbuttonProps, ButtonItemParam };
