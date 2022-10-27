/**
 *	@name 实现下拉按钮
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC, ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { ButtonItemParams, BTeditBtn } from '@/components/iButton';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * @param btFun 数据集合
 * @param IbuttonEvent 点击事件
 */
interface IbtFun {
	btFun: ButtonItemParams[];
	buttonEvent: BTeditBtn;
}

/**
 * @param onOpenChange 移入移除
 */
interface IdropdownProps extends IbtFun {
	onOpenChange: (open: boolean) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Idropdown: FC<IdropdownProps> = ({ btFun, onOpenChange, buttonEvent }) => {
	return (
		<>
			<Dropdown overlay={Menus({ btFun, buttonEvent })} placement="bottom" arrow onOpenChange={onOpenChange} trigger={['click']}>
				{/* <EllipsisOutlined /> */}
				<Button type="link" icon={<EllipsisOutlined />} />
			</Dropdown>
		</>
	);
};

const Menus = ({ btFun, buttonEvent }: IbtFun) => {
	return (
		<Menu
			items={btFun.reduce((acc: MenuItem[], item, i) => {
				let newItem = getItem(<Ibutton buttonList={[item]} editBtn={() => buttonEvent(item.type, item)}></Ibutton>, i);
				return [...acc, newItem];
			}, [])}></Menu>
	);
};

export default Idropdown;
export type { ButtonItemParams };

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
