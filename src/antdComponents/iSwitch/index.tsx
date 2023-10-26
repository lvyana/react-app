/**
 * @file 开关
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { Switch } from 'antd';
import { SwitchChangeEventHandler } from 'antd/es/switch';

/**
 * 开关props
 * @param disabled 是否禁用
 * @method onChange 变化时的回调函数
 * @param style 样式
 */
export type SwitchType = {
	disabled?: boolean;
	onChange?: SwitchChangeEventHandler | undefined;
	style?: React.CSSProperties;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getSwitch = (item: SwitchType) => {
	return <Switch onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};

export default getSwitch;
