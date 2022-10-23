/**
 *	@name 实现表单
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC } from 'react';
import { Form, Row, Col, FormInstance } from 'antd';

import { useAppSelector } from '@/store/hooks';
import { GET_SIZE } from '@/store/reducers/layout';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import FORM_ITEM_MAP from './components/formItemMap';
import type { FormItemParam, FormItem } from './type';
export type IformLayout = 'horizontal' | 'vertical' | 'inline';

/**
 * @param formList 表单json
 * @param form 表单实例
 * @param onFinish 表单确认
 * @param formLayout 表单格式
 * @param self 是否自适应
 */
interface IformProps {
	formList?: FormItemParam[];
	form: FormInstance;
	onFinish?: (type?: string) => void;
	formLayout?: IformLayout;
	self?: boolean;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iform: FC<IformProps> = ({ formList, form, onFinish, formLayout = 'horizontal', self = false }) => {
	const formItem = (item: FormItemParam) => {
		if (item.type === 'input') {
			return (
				<Form.Item
					name={item.name}
					label={item.label}
					tooltip={item.tooltip}
					rules={item.rules}
					{...item.layout}
					labelAlign={item.labelAlign}
					getValueFromEvent={(e) => e.target.value.replace(/(^\s*)|(\s*$)/g, '')}>
					{formItemCom(item)}
				</Form.Item>
			);
		}
		return (
			<Form.Item
				name={item.name}
				label={item.label}
				tooltip={item.tooltip}
				rules={item.rules}
				{...item.layout}
				labelAlign={item.labelAlign}>
				{formItemCom(item)}
			</Form.Item>
		);
	};
	const formItemCom = (item: FormItem) => {
		if (item.show === false) return;

		return FORM_ITEM_MAP[item.type](item, onFinish);
	};

	// 尺寸
	const size = useAppSelector(GET_SIZE);

	return (
		<>
			<Form form={form} layout={formLayout} size={size as SizeType}>
				<Row>
					{formList &&
						formList.map((item: FormItemParam, i) => {
							return (
								<Col
									{...(self
										? { xxl: { span: item.span }, xl: { span: 6 }, lg: { span: 8 }, md: { span: 12 }, xs: { span: 24 } }
										: { lg: { span: item.span }, md: { span: item.span }, xs: { span: 24 } })}
									key={item.key}>
									{formItem(item)}
								</Col>
							);
						})}
				</Row>
			</Form>
		</>
	);
};

export type { FormInstance, FormItemParam };
export default Iform;
