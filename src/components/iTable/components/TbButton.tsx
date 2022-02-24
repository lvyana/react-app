import React, { FC } from 'react';
import { Button } from 'antd';

type Itype = 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
interface Iprops {
	name: string;
	type?: Itype;
}
const TbButton: FC<Iprops> = ({ name, type = 'link' }) => {
	return (
		<div>
			<Button type={type}>{name}</Button>
		</div>
	);
};

export default TbButton;
