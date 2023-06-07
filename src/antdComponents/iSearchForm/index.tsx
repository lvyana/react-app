/**
 * @file 实现搜索表单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC } from 'react';
import Iform, { FormItem, FormInstance } from '@/antdComponents/iForm';
import AnimateComponent from '@/pluginComponents/iAnimateComponent';
import { IresponsiveMin, IresponsiveMax } from '@/pluginComponents/iResponsive';
import Icard from '@/antdComponents/iCard';

/**
 * @param form 表单实例
 * @param formList 表单集合类型
 */
interface IsearchFormProps<T, P> {
	form: FormInstance<P>;
	formList: T;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IsearchForm = <T extends FormItem<object>[], P extends object>({ form, formList }: IsearchFormProps<T, P>) => {
	return (
		<>
			<IresponsiveMax MaxWidth={1540}>
				<AnimateComponent>
					<Iform form={form} formList={formList}></Iform>
				</AnimateComponent>
			</IresponsiveMax>

			<IresponsiveMin MinWidth={1540}>
				<Icard bodyStyle={{ paddingBottom: 0 }}>
					<Iform form={form} formList={formList}></Iform>
				</Icard>
			</IresponsiveMin>
		</>
	);
};
export type { FormInstance, FormItem };
export default IsearchForm;
