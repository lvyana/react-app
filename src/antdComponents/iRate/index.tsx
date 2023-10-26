/**
 * @file 评分
 * @author ly
 * @createDate 2023年1月3日
 */
import React from 'react';
import { Rate } from 'antd';

/**
 * 评分
 * @param disabled 只读，无法进行交互
 * @method onChange 选择时的回调
 * @param option 自定义每项的提示信息
 * @param style 样式
 */
export type RateType<T> = {
	disabled?: boolean;
	onChange?: ((value: number) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getRate = <T extends string>(item: RateType<T>) => {
	return <Rate tooltips={item.option} onChange={item.onChange} disabled={item.disabled} style={{ width: '100%', ...item.style }} />;
};

export default getRate;
