import React, { FC } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const Menus = ({ btFun, buttonEvent }: IbtFun) => {
	return (
		<Menu>
			{btFun?.map((item, i) => {
				return (
					<Menu.Item key={i} onClick={() => buttonEvent(item.name)}>
						{item.name}
					</Menu.Item>
				);
			})}
		</Menu>
	);
};
interface IbtFunItem {
	name: string;
}
interface IbtFun {
	btFun: IbtFunItem[];
	buttonEvent: (type: string) => void;
}
interface Iprops extends IbtFun {
	onVisibleChange: (visible: boolean) => void;
}

const Idropdown: FC<Iprops> = ({ btFun, onVisibleChange, buttonEvent }) => {
	return (
		<>
			<Dropdown overlay={Menus({ btFun, buttonEvent })} placement="bottomCenter" arrow onVisibleChange={onVisibleChange}>
				{/* <EllipsisOutlined /> */}
				<Button type="link" icon={<EllipsisOutlined />} />
			</Dropdown>
		</>
	);
};

export default Idropdown;
