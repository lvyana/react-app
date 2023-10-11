/**
 * @file 单选
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import IconFont from '@/utils/iconfont';

/**
 * 单选options
 * @param key
 * @param value 标识
 * @param name 名字
 * @param icon 图标
 */
export interface RadioOptionsParam {
	key: string | number;
	value: string | number;
	icon?: string;
	name?: string;
}

export type RadioType<T> = {
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((e: RadioChangeEvent) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
	optionType?: 'default' | 'button';
};

type IradioProps<T> = {
	item: RadioType<T>;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iradio = <T extends RadioOptionsParam>({ item }: IradioProps<T>) => {
	return (
		<Radio.Group onChange={item.onChange} optionType={item.optionType}>
			{item.option &&
				item.option.map((value) => {
					return (
						<Radio key={value.key} value={value.value} disabled={item.disabled} style={{ ...item.style }}>
							{value.icon && <IconFont type={value.icon} />} {value.name}
						</Radio>
					);
				})}
		</Radio.Group>
	);
};

export default Iradio;
