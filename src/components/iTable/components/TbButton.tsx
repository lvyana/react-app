import React, { FC } from 'react';
import { Button } from 'antd';
import { ItbClick } from '@/components/iTable';

type Itype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;

/**
 * TbButton
 * type 唯一类型
 * name 显示内容
 * btType 按钮类型
 * record 表格某一条数据
 * tbClick 点击事件
 */
interface Iprops {
	type: string;
	name: string;
	btType?: Itype;
	record: object;
	tbClick?: ItbClick<unknown>;
}
const TbButton: FC<Iprops> = ({ type, name, record, tbClick, btType = 'link' }) => {
	return (
		<div>
			<Button type={btType} onClick={() => tbClick && tbClick(type, record)}>
				{name}
			</Button>
		</div>
	);
};

export default TbButton;
