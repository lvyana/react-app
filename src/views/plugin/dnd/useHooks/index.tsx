/**
 * @file form hooks
 * @author ly
 * @createDate 2023年1月3日
 */
import { useContext, useEffect } from 'react';
import { Form } from 'antd';
import { useRequest } from 'ahooks';
import type { FormInstance } from 'antd/es/form';
import type { ButtonOptionsParams, FormParams } from '../EditForm';
import { Context } from '../context';
import { anyOptions } from '../service';
import { Rule } from 'antd/es/form';
import { FormItem } from '@/antdComponents/iForm/type';
import type { Options } from '../itemTypes';

// 监听绑定表单的变化 修改GenerateForm
export const useEditFormItemValue = (key: keyof FormParams, form: FormInstance<FormParams>) => {
	const context = useContext(Context);

	const nameValue = Form.useWatch([key], form);

	useEffect(() => {
		if (context?.state.selectFormItemKey) {
			const newFormList = context.state.formList.map((item) => {
				if (context?.state.selectFormItemKey === item.key) {
					return { ...item, [key]: nameValue };
				}
				return item;
			});

			context.dispatch({ type: 'formList', value: newFormList });
		}
	}, [nameValue]);
};

// 监听没有绑定表单的变化 修改GenerateForm
export const useEditItemValue = () => {
	const context = useContext(Context);
	//
	const editItemValue = (params: Partial<FormParams>) => {
		if (context?.state.selectFormItemKey) {
			const newFormList = context.state.formList.map((item) => {
				if (context?.state.selectFormItemKey === item.key) {
					return { ...item, ...params };
				}
				return item;
			});

			context.dispatch({ type: 'formList', value: newFormList });
		}
	};

	return { editItemValue };
};

// 请求url 修改GenerateForm
export const useWatchUrl = () => {
	const context = useContext(Context);

	const { run: getAnyOptions } = useRequest(anyOptions, {
		manual: true,
		onSuccess: (res) => {
			const { data } = res;

			const newFormList =
				context?.state.formList.map((item) => {
					if (item.key === context.state.selectFormItemKey) {
						return { ...item, option: data };
					}
					return item;
				}) || [];

			context?.dispatch({ type: 'formList', value: newFormList });
		}
	});

	return [getAnyOptions];
};

// 拖拽数据转成标准表单数据
export const useFormData = () => {
	const getFormData = (dndFormData: FormParams): FormItem<object> => {
		const { type, key, span, label, disabled, option, isRule, isRuleTitle, rule, ruleTitle, name, labelCol } = dndFormData;
		let newFormList: FormItem<object> & { disabled?: boolean } = {
			type,
			key,
			span,
			label,
			name,
			disabled,
			comConfig: { option }
		};

		if (isRule === 2) {
			newFormList = {
				...newFormList,
				rules: [{ required: true, message: isRuleTitle }]
			};
		} else {
			newFormList = { ...newFormList, rules: [{ required: false }] };
		}

		if (rule) {
			newFormList = {
				...newFormList,
				rules: [
					...(newFormList.rules || []),
					{
						validator: (_: Rule, value) => {
							const reg = rule && new RegExp(rule.substring(1, rule.length - 1));
							// /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
							if (value === '' || value === undefined || value === null) {
								return Promise.resolve();
							} else {
								if (reg !== '' && !reg?.test(value) && value !== '') {
									return Promise.reject(new Error(ruleTitle));
								} else {
									return Promise.resolve();
								}
							}
						}
					}
				]
			};
		}

		if (labelCol) {
			newFormList = { ...newFormList, layout: { labelCol: { span: labelCol }, wrapperCol: { span: 24 - labelCol } } };
		}

		return newFormList;
	};
	return { getFormData };
};
