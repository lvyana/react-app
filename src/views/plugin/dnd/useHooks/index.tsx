import { useContext, useEffect } from 'react';
import { Form } from 'antd';
import { useRequest } from 'ahooks';
import type { FormInstance } from 'antd/es/form';
import type { FormParams } from '../EditForm';
import { Context } from '../context';
import { anyOptions } from '../service';

// 监听左侧变化修改GenerateForm
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

// 请求url 修改GenerateForm
export const useWatchUrl = () => {
	const context = useContext(Context);

	const { run: getAnyOptions } = useRequest(anyOptions, {
		manual: true,
		onSuccess: (res) => {
			console.log(res);
			const { data } = res;

			const newFormList = context?.state.formList.map((item) => {
				if (item.key === context.state.selectFormItemKey) {
					return { ...item, option: data };
				}
				return item;
			});

			context?.dispatch({ type: 'formList', value: newFormList });
		}
	});

	return [getAnyOptions];
};
