/**
 * @file 多选
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { ReactNode } from 'react';
import { Checkbox } from 'antd';
import { CheckboxOptionType } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

export type CheckboxType<T> = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((checkedValue: CheckboxValueType[]) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getCheckbox = <T extends CheckboxOptionType>(item: CheckboxType<T>) => {
	return <Checkbox.Group options={item.option} onChange={item.onChange} disabled={item.disabled} style={{ ...item.style }} />;
};

export default getCheckbox;
