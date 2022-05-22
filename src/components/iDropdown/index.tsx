import React, { FC, ReactNode } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import Ibutton, { BUTTONITEM } from '@/components/iButton';

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
		<Menu>
			{btFun?.map((item, i) => {
				return (
					<Menu.Item key={i} onClick={() => buttonEvent(item.type)}>
						<Ibutton buttonList={[item]}></Ibutton>
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
export type { BUTTONITEM };
