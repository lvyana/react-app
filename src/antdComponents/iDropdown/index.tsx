/**
 *	@file 封装下拉按钮
 *	@author ly
 *  @createDate 2020年4月27日
 */
import React, { FC, ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { ButtonItemParams, OnClickBtn } from '@/antdComponents/iButton';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * @param btArr 按钮数据集合
 * @param IbuttonEvent 点击事件
 * @param onOpenChange 移入移除
 */
interface IdropdownProps<T> {
	btArr: ButtonItemParams<T>[];
	onClickBtn: OnClickBtn<T>;
	onOpenChange: (open: boolean) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Idropdown = <T,>({ btArr, onOpenChange, onClickBtn }: IdropdownProps<T>) => {
	return (
		<>
			<Dropdown menu={{ items: getMenus({ btArr, onClickBtn }) }} placement="bottom" arrow onOpenChange={onOpenChange} trigger={['click']}>
				{/* <EllipsisOutlined /> */}
				<Button type="link" icon={<EllipsisOutlined />} />
			</Dropdown>
		</>
	);
};

/**
 * @method 把按钮数据处理成菜单数据
 * @returns 菜单数据
 */
const getMenus = <T,>({ btArr, onClickBtn }: Omit<IdropdownProps<T>, 'onOpenChange'>) => {
	return btArr.reduce((acc: MenuItem[], item, i) => {
		let newItem = getItem(<Ibutton buttonList={[item]} onClick={() => onClickBtn(item.type, item)}></Ibutton>, i);
		return [...acc, newItem];
	}, []);
};

export default Idropdown;
export type { ButtonItemParams, OnClickBtn };

/**
 * @method 处理成标准数据
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
