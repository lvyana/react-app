import React, { FC } from 'react';
import { Button } from 'antd';
import { ItbClick } from '@/components/iTable';

type Itype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;

interface Iprops {
	type: string;
	name: string;
	btType?: Itype;
	record: object;
	tbClick?: ItbClick;
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
