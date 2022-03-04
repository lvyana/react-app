import React, { FC, ReactNode } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const Menus = ({ btFun, buttonEvent }: IbtFun) => {
	return (
		<Menu>
			{btFun?.map((item, i) => {
				return (
					<Menu.Item key={i} onClick={() => buttonEvent(item.type)}>
						<Button type={item.Btype ? item.Btype : 'link'}>
							{item.iconFont}
							{item.name}
						</Button>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};
export interface IbtFunItem {
	type: string | number;
	name?: string;
	iconFont?: ReactNode;
	Btype?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
}
export type IbuttonEvent = (type: string | number) => void;
interface IbtFun {
	btFun: IbtFunItem[];
	buttonEvent: IbuttonEvent;
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
