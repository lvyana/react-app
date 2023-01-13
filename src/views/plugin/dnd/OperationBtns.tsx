/**
 * @name 上方按钮操作
 * @user ly
 * @date 2022年12月30日
 */
import React, { useContext, useState } from 'react';
import { Form } from 'antd';
import Ibutton, { ButtonItemParams, OnClickBtn } from '@/antdComponents/iButton';
import JsonView from './components/JsonView';
import ImportJson from './components/ImportJson';
import { Context } from './context';
import type { importJsonForm } from './components/ImportJson';
import type { OnOkOrCancelType } from '@/antdComponents/iModal';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const OperationBtns = () => {
	const context = useContext(Context);

	const buttonList: ButtonItemParams<'JSON' | 'import'>[] = [
		{
			name: '生成JSON',
			type: 'JSON',
			btType: 'primary'
		},
		{
			name: '导入JSON',
			type: 'import',
			btType: 'primary',
			className: 'ml-1'
		}
	];

	//jsonView
	const [jsonViewOpen, setJsonViewOpen] = useState(false);
	const [jsonViewLoading, setJsonViewLoading] = useState(false);

	const jsonViewFun: OnOkOrCancelType = (type) => {
		setJsonViewOpen(false);
	};

	// ImportJson
	const [importJsonOpen, setImportJsonOpen] = useState(false);
	const [importJsonLoading, setImportJsonLoading] = useState(false);
	const [importJsonForm] = Form.useForm<importJsonForm>();

	const importJsonFun: OnOkOrCancelType = async (type) => {
		if (type === 'ok') {
			const formListStr = importJsonForm.getFieldValue('json');
			if (!formListStr) {
				return setImportJsonOpen(false);
			}
			try {
				const values = await importJsonForm.validateFields();
				context?.dispatch({ type: 'formList', value: JSON.parse(formListStr) });
				importJsonForm.resetFields();
				setImportJsonOpen(false);
			} catch (errorInfo) {
				// console.log('Failed:', errorInfo);
			}
		} else {
			importJsonForm.resetFields();
			setImportJsonOpen(false);
		}
	};

	const onClickBtn: OnClickBtn<'JSON' | 'import'> = (type) => {
		if (type === 'JSON') {
			setJsonViewOpen(true);
		} else if (type === 'import') {
			setImportJsonOpen(true);
		}
	};

	return (
		<div className="mb-2">
			<Ibutton buttonList={buttonList} onClickBtn={onClickBtn}></Ibutton>
			<JsonView open={jsonViewOpen} onOkOrCancel={jsonViewFun} confirmLoading={jsonViewLoading} />
			<ImportJson open={importJsonOpen} onOkOrCancel={importJsonFun} confirmLoading={importJsonLoading} form={importJsonForm} />
		</div>
	);
};

export default OperationBtns;
