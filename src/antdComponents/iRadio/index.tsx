/**
 * @file 单选框
 * @author ly
 * @createDate 2023年1月3日
 */
import React, { FC, ReactNode } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import IconFont from '@/utils/iconfont';
import { CheckboxOptionType } from 'antd/lib/checkbox';

export type RadioType<T> = {
	value?: string | number;
	disabled?: boolean;
	allowClear?: boolean;
	onChange?: ((e: RadioChangeEvent) => void) | undefined;
	option?: T[];
	style?: React.CSSProperties;
	children?: ReactNode;
	optionType?: 'default' | 'button';
	buttonStyle?: 'outline' | 'solid';
};

export type RadioOptionType = CheckboxOptionType & { icon?: string };
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const getRadio = <T extends RadioOptionType>(item: RadioType<T>) => {
	return (
		<Radio.Group
			options={setOption(item.option)}
			onChange={item.onChange}
			value={item.value}
			style={{ ...item.style }}
			optionType={item.optionType}
			buttonStyle={item.buttonStyle}
		/>
	);
};

// 处理label有icon图标
const setOption = (option?: RadioOptionType[]) => {
	return option?.map((item) => {
		if (item.icon) {
			return {
				...item,
				label: (
					<>
						<IconFont type={item.icon} />
						{item.label}
					</>
				)
			};
		}
		return item;
	});
};

export default getRadio;
