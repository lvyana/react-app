import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import useHasPermiss from '@/utils/permissions';
import { Button } from 'antd';
import { IBUTTON } from './type';

const Ibutton = ({ buttonList, loadingName, editBtn }: IBUTTON) => {
	const size = useSelector((state: RootState) => state.layout.size);
	const { getPermiss } = useHasPermiss();
	return (
		<>
			{buttonList.map((item, i) =>
				getPermiss(item.hasPermiss) ? (
					<Button
						key={i}
						type={item.type}
						onClick={() => editBtn && editBtn(item.name, item)}
						disabled={item.disabled === true}
						loading={loadingName === item.name}
						size={size}
						style={{ marginRight: '20px' }}>
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
