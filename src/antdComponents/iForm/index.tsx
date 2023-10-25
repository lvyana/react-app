/**
 * @file 封装表单
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { Fragment } from 'react';
import { Form, Row, Col, FormInstance } from 'antd';
import type { FormItemParams } from './type';
import FormItem, { FormItemProps } from './FormItem';
import { FormLayout } from 'antd/es/form/Form';
export * from './type';

export type OnValuesChange<F> = (changedValues: F, values: F) => void;

type LayoutParams<T> = {
	FormItem: React.FC<FormItemProps>;
	formList: T;
};

/**
 * 表单参数
 * @param T 表单渲染数据
 * @param F 表单对象
 * @param formList 表单json
 * @param form 表单实例
 * @param onValuesChange 表单发生变化
 * @param formLayout 表单格式
 */
interface IformProps<T, F> {
	formList: T;
	form: FormInstance<F>;
	onValuesChange?: OnValuesChange<F>;
	formLayout?: FormLayout;
	layout?: {
		type?: 'row' | 'custom';
		self?: boolean;
		setCustom?: (config: LayoutParams<T>) => React.ReactNode;
	};
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iform = <T extends FormItemParams<object>[], F extends object>({
	formList,
	form,
	formLayout = 'horizontal',
	onValuesChange,
	layout
}: IformProps<T, F>) => {
	// 默认用row 也可以自定义样式
	const getFormLayout = () => {
		const { type, setCustom, self } = layout || {};
		if (type === 'custom') {
			return setCustom && setCustom({ FormItem, formList });
		} else {
			return setRow(FormItem, formList, self);
		}
	};

	return (
		<>
			<Form form={form} layout={formLayout} onValuesChange={onValuesChange}>
				{getFormLayout()}
			</Form>
		</>
	);
};

// 默认设置表单样式
const setRow = <T extends FormItemParams<object>[]>(FormItem: React.FC<FormItemProps>, formList: T, self = false) => {
	const getSelf = (span?: number) => {
		if (self) {
			return { xxl: { span: span }, xl: { span: 6 }, lg: { span: 8 }, md: { span: 12 }, xs: { span: 24 } };
		} else {
			return { lg: { span: span }, md: { span: span }, xs: { span: 24 } };
		}
	};
	return (
		<Row>
			{formList &&
				formList.map((item) => {
					if (item.show === false) return <Fragment key={item.key}></Fragment>;
					return (
						<Col {...getSelf(item.span)} key={item.key}>
							<FormItem item={item}></FormItem>
						</Col>
					);
				})}
		</Row>
	);
};

export default Iform;
