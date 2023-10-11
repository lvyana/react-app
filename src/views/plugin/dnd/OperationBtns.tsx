/**
 * @name 上方按钮操作
 * @user ly
 * @date 2022年12月30日
 */
import React, { useContext, useState } from 'react';
import { Form } from 'antd';
import Ibutton from '@/antdComponents/iButton/List';
import JsonView from './components/JsonView';
import ImportJson from './components/ImportJson';
import { Context } from './context';
import type { importJsonForm } from './components/ImportJson';
import type { OnOkOrCancelType } from '@/antdComponents/iModal';
import TemplateForm from './components/TemplateForm';
import GeneratCode from './components/GeneratCode';
import type { ButtonItemParams, OnClickBtn } from '@/antdComponents/iDropdown';

type ButtonType = 'JSON' | 'import' | 'template' | 'generatCode';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const OperationBtns = () => {
	const context = useContext(Context);

	const buttonList: ButtonItemParams<ButtonType>[] = [
		{
			name: '生成示例',
			type: 'template',
			btnType: 'primary'
		},
		{
			name: '生成JSON',
			type: 'JSON',
			btnType: 'primary',
			className: 'ml-1'
		},
		{
			name: '导入JSON',
			type: 'import',
			btnType: 'primary',
			className: 'ml-1'
		},
		{
			name: '生成代码',
			type: 'generatCode',
			btnType: 'primary',
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

	// TemplateForm
	const [templateFormOpen, setTemplateFormOpen] = useState(false);
	const [templateFormLoading, setTemplateFormLoading] = useState(false);
	const [templateFormForm] = Form.useForm<importJsonForm>();

	const templateFun: OnOkOrCancelType = async (type) => {
		if (type === 'ok') {
			setTemplateFormOpen(false);
		} else {
			setTemplateFormOpen(false);
		}
	};

	// generatCode
	const [generatCodeOpen, setgeneratCodeOpen] = useState(false);
	const [generatCodeLoading, setgeneratCode] = useState(false);

	const generatCodeModalBtn: OnOkOrCancelType = (type) => {
		if (type === 'ok') {
			setgeneratCodeOpen(false);
		} else {
			setgeneratCodeOpen(false);
		}
	};

	const onClickBtn: OnClickBtn<ButtonType> = (type) => {
		if (type === 'JSON') {
			setJsonViewOpen(true);
		} else if (type === 'import') {
			setImportJsonOpen(true);
		} else if (type === 'template') {
			setTemplateFormOpen(true);
		} else if (type === 'generatCode') {
			setgeneratCodeOpen(true);
		}
	};

	return (
		<div className="mb-2">
			<Ibutton option={buttonList} onClick={onClickBtn}></Ibutton>
			<JsonView open={jsonViewOpen} onOkOrCancel={jsonViewFun} confirmLoading={jsonViewLoading} />
			<ImportJson open={importJsonOpen} onOkOrCancel={importJsonFun} confirmLoading={importJsonLoading} form={importJsonForm} />
			<TemplateForm
				open={templateFormOpen}
				onOkOrCancel={templateFun}
				confirmLoading={templateFormLoading}
				form={templateFormForm}></TemplateForm>
			<GeneratCode open={generatCodeOpen} onOkOrCancel={generatCodeModalBtn} confirmLoading={generatCodeLoading}></GeneratCode>
		</div>
	);
};

export default OperationBtns;
