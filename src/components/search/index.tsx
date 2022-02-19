import React, { FC } from 'react';
import Formlist from '@/components/formList';
import { FORMITEM } from '@/components/formList/type';
import { Card, FormInstance } from 'antd';
import './index.less';

export interface onFinishsType {
	onFinish: ((values?: any) => void) | undefined;
}

interface Iprops extends onFinishsType {
	formList: FORMITEM[];
	form: FormInstance;
}
// 搜索表单模板
const Search: FC<Iprops> = ({ formList, form, onFinish }) => {
	return (
		<div className="myCard">
			<Card>
				<Formlist formList={formList} form={form} onFinish={onFinish} />
			</Card>
		</div>
	);
};

export default Search;
