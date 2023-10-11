/**
 * @file 开关
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { Switch } from 'antd';
import { SwitchChangeEventHandler } from 'antd/es/switch';

export type SwitchType = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: SwitchChangeEventHandler | undefined;
	placeholder?: string;
	style?: React.CSSProperties;
	children?: ReactNode;
};

type IswitchProps = {
	item: SwitchType;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iswitch: FC<IswitchProps> = ({ item }) => {
	return <Switch onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};

export default Iswitch;
