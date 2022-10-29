/**
 *	@name 实现搜索表单
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC } from 'react';
import Iform, { FormItemParam, FormInstance } from '@/components/iForm';
import AnimateComponent from '@/components/iAnimateComponent';
import { IresponsiveMin, IresponsiveMax } from '@/components/iResponsive';
import Icard from '@/components/iCard';

interface IsearchFormProps<T> {
	form: FormInstance;
	formList: T;
	onFinish: (type?: string) => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IsearchForm = <T extends FormItemParam<any, any>[]>({ form, formList, onFinish }: IsearchFormProps<T>) => {
	return (
		<>
			<IresponsiveMax MaxWidth={1540}>
				<AnimateComponent>
					<Iform form={form} formList={formList} onFinish={onFinish}></Iform>
				</AnimateComponent>
			</IresponsiveMax>

			<IresponsiveMin MinWidth={1540}>
				<Icard style={{ paddingBottom: 0 }}>
					<Iform form={form} formList={formList} onFinish={onFinish}></Iform>
				</Icard>
			</IresponsiveMin>
		</>
	);
};
export type { FormInstance, FormItemParam };
export default IsearchForm;
