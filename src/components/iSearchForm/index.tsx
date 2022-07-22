import React, { FC } from 'react';
import Iform, { FormItemParam, FormInstance } from '@/components/iForm';
import AnimateComponent from '@/components/animateComponent';
import { IresponsiveMin, IresponsiveMax } from '@/components/iResponsive';
import Icard from '@/components/iCard';

interface IsearchFormProps {
	form: FormInstance;
	formList: FormItemParam[];
	onFinish: (type?: string) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IsearchForm: FC<IsearchFormProps> = ({ form, formList, onFinish }) => {
	return (
		<>
			<IresponsiveMax MaxWidth={1540}>
				<AnimateComponent>
					<Iform form={form} formList={formList} onFinish={onFinish}></Iform>
				</AnimateComponent>
			</IresponsiveMax>

			<IresponsiveMin MinWidth={1540}>
				<Icard>
					<Iform form={form} formList={formList} onFinish={onFinish}></Iform>
				</Icard>
			</IresponsiveMin>
		</>
	);
};
export type { FormInstance, FormItemParam };
export default IsearchForm;
