import React, { FC } from 'react';
import { Radio } from 'antd';
import IconFont from '@/utils/iconfont';
import type { FormItemCom } from '../type';

// 单选
export const formRadio = (item: FormItemCom) => {
	return (
		<Radio.Group onChange={item.onChange}>
			{item.option &&
				item.option.map((value) => {
					return (
						<Radio key={value.key} value={value.value} disabled={item.disabled} style={{ width: '100%', ...item.style }}>
							{value.icon && <IconFont type={value.icon} />} {value.name}
						</Radio>
					);
				})}
		</Radio.Group>
	);
};
