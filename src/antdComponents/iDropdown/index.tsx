/**
 * @file 下拉按钮
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { IbuttonListProps } from '@/antdComponents/iButton/List';
import type { ButtonItemParams, OnClickBtn } from '@/antdComponents/iButton/type';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * 下拉按钮组件props
 * @param buttonList 按钮数据集合
 * @method onClickBtn 点击事件
 * @method onOpenChange 移入移除
 */
interface IdropdownProps<T> extends IbuttonListProps<T> {
	onOpenChange: (open: boolean) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Idropdown = <T,>({ option, onOpenChange, onClick }: IdropdownProps<T>) => {
	return (
		<>
			<Dropdown menu={{ items: getMenus({ option, onClick }) }} placement="bottom" arrow onOpenChange={onOpenChange} trigger={['click']}>
				{/* <EllipsisOutlined /> */}
				<Button type="link" icon={<EllipsisOutlined />} />
			</Dropdown>
		</>
	);
};

/**
 * 把按钮数据处理成菜单数据
 * @returns 菜单数据
 */
const getMenus = <T,>({ option, onClick }: Omit<IdropdownProps<T>, 'onOpenChange'>) => {
	return option.reduce((acc: MenuItem[], item, i) => {
		let newItem = getItem(<Ibutton option={[item]} onClick={onClick}></Ibutton>, i);
		return [...acc, newItem];
	}, []);
};

export default Idropdown;
export type { ButtonItemParams, OnClickBtn };

/**
 * 处理成标准数据
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
