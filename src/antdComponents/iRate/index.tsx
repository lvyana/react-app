/**
 * @file 评分
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { Rate } from 'antd';

export type RateType<T> = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((value: number) => void) | undefined;
	placeholder?: string;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
};

type IrateProps<T> = {
	item: RateType<T>;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Irate = <T extends string>({ item }: IrateProps<T>) => {
	return <Rate tooltips={item.option} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};

export default Irate;
