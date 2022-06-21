import React, { FC, ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { ButtonItemParam } from '@/components/iButton';

type MenuItem = Required<MenuProps>['items'][number];

export type IbuttonEvent = (type: string | number) => void;
/**
 * @param btFun 数据集合
 * @param IbuttonEvent 点击事件
 */
interface IbtFun {
	btFun: ButtonItemParam[];
	buttonEvent: IbuttonEvent;
}
/**
 * @param onVisibleChange 移入移除
 */
interface Iprops extends IbtFun {
	onVisibleChange: (visible: boolean) => void;
}

/**
 * @param IbtFun
 * @return 下拉菜单
 */
const Menus = ({ btFun, buttonEvent }: IbtFun) => {
	return (
		<Menu
			items={btFun.reduce((acc: MenuItem[], item, i) => {
				let newItem = getItem(<Ibutton buttonList={[item]} editBtn={() => buttonEvent(item.type)}></Ibutton>, i);
				return [...acc, newItem];
			}, [])}></Menu>
	);
};

/**
 *
 * @props Iprops
 * @returns 下拉菜单组件
 */
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
export type { ButtonItemParam };

/**
 *
 * @param label 名字
 * @param key 键
 * @param icon 图标
 * @param children 子级
 * @param type menu组件类型
 * @returns 处理菜单数据
 */
const getItem = (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
};
