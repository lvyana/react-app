/**
 * @name 上方按钮操作
 * @user ly
 * @date 2022年12月30日
 */
import React, { useState } from 'react';
import Ibutton, { ButtonItemParams, OnClickBtn } from '@/antdComponents/iButton';
import JsonView from './components/JsonView';
import type { OnOkOrCancelType } from '@/antdComponents/iModal';
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const OperationBtns = () => {
	const buttonList: ButtonItemParams<'JSON'>[] = [
		{
			name: 'JSON',
			type: 'JSON',
			btType: 'primary'
		}
	];

	//jsonView
	const [jsonViewOpen, setJsonViewOpen] = useState(false);
	const [jsonViewLoading, setJsonViewLoading] = useState(false);

	const onClickBtn: OnClickBtn<'JSON'> = (type) => {
		if (type === 'JSON') {
			setJsonViewOpen(true);
		}
	};

	const jsonViewFun: OnOkOrCancelType = (type) => {
		setJsonViewOpen(false);
	};
	return (
		<div className="mb-2">
			<Ibutton buttonList={buttonList} onClickBtn={onClickBtn}></Ibutton>
			<JsonView open={jsonViewOpen} onOkOrCancel={jsonViewFun} confirmLoading={jsonViewLoading} />
		</div>
	);
};

export default OperationBtns;
