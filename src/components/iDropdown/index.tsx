import React, { FC, ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { BUTTONITEM } from '@/components/iButton';

type MenuItem = Required<MenuProps>['items'][number];

export type IbuttonEvent = (type: string | number) => void;
/**
 * 按钮
 * btFun 数据集合
 * IbuttonEvent 点击事件
 */
interface IbtFun {
	btFun: BUTTONITEM[];
	buttonEvent: IbuttonEvent;
}
/**
 *
 * onVisibleChange 移入移除
 */
interface Iprops extends IbtFun {
	onVisibleChange: (visible: boolean) => void;
}

const Menus = ({ btFun, buttonEvent }: IbtFun) => {
	return (
		<Menu
			items={btFun.reduce((acc: MenuItem[], item, i) => {
				let newItem = getItem(<Ibutton buttonList={[item]} editBtn={() => buttonEvent(item.type)}></Ibutton>, i);
				return [...acc, newItem];
			}, [])}></Menu>
	);
};

const Idropdown: FC<Iprops> = ({ btFun, onVisibleChange, buttonEvent }) => {
	return (
		<>
			<Dropdown overlay={Menus({ btFun, buttonEvent })} placement="bottom" arrow onVisibleChange={onVisibleChange}>
				{/* <EllipsisOutlined /> */}
				<Button type="link" icon={<EllipsisOutlined />} />
			</Dropdown>
		</>
	);
};

export default Idropdown;
export type { BUTTONITEM };

const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
};
