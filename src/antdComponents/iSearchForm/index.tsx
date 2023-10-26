/**
 * @file 响应式表单
 * @author ly
 * @createDate 2020年4月27日
 */
import React from 'react';
import Iform, { FormItemParams } from '@/antdComponents/iForm';
import AnimateComponent from '@/pluginComponents/iAnimateComponent';
import { IresponsiveMin, IresponsiveMax } from '@/pluginComponents/iResponsive';
import Icard from '@/antdComponents/iCard';
import type { FormInstance } from 'antd';

/**
 * 响应式表单props
 * @param form 表单实例
 * @param formList 表单集合类型
 */
interface IsearchFormProps<T, P> {
	form: FormInstance<P>;
	formList: T;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const IsearchForm = <T extends FormItemParams<object>[], P extends object>({ form, formList }: IsearchFormProps<T, P>) => {
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

export default IsearchForm;
