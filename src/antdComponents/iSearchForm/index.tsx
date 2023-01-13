/**
 *	@name 实现搜索表单
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC } from 'react';
import Iform, { FormItem, FormInstance } from '@/antdComponents/iForm';
import AnimateComponent from '@/pluginComponents/iAnimateComponent';
import { IresponsiveMin, IresponsiveMax } from '@/pluginComponents/iResponsive';
import Icard from '@/antdComponents/iCard';

interface IsearchFormProps<T> {
	form: FormInstance;
	formList: T;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IsearchForm = <T extends FormItem[]>({ form, formList }: IsearchFormProps<T>) => {
	return (
		<>
			<IresponsiveMax MaxWidth={1540}>
				<AnimateComponent>
					<Iform form={form} formList={formList}></Iform>
				</AnimateComponent>
			</IresponsiveMax>

			<IresponsiveMin MinWidth={1540}>
				<Icard style={{ paddingBottom: 0 }}>
					<Iform form={form} formList={formList}></Iform>
				</Icard>
			</IresponsiveMin>
		</>
	);
};
export type { FormInstance, FormItem };
export default IsearchForm;
