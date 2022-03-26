import React, { FC, ReactNode } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

/**
 * 按钮
 * type 唯一标识
 * name 名称
 * iconFont 图标
 * Btype 类型
 */
export interface IbtFunItem {
	type: string | number;
	name?: string;
	iconFont?: ReactNode;
	Btype?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
}

export type IbuttonEvent = (type: string | number) => void;
/**
 * 按钮
 * btFun 数据集合
 * IbuttonEvent 点击事件
 */
interface IbtFun {
	btFun: IbtFunItem[];
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
