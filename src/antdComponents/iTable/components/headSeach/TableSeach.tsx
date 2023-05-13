/**
 * @file 表头搜索
 * @author ly
 * @createDate 2023年4月9日
 */
import React, { FC } from 'react';
import { Button, Col, Row, TreeSelect } from 'antd';
import { formTreeSelect } from '@/antdComponents/iForm/components/ItreeSelect';
import { FormItemMap } from '@/antdComponents/iForm';

const { SHOW_PARENT } = TreeSelect;

type TreeSelectProps = {
	children: React.ReactNode;
	onSubmit: () => void;
	onClose: () => void;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export const treeSelect: FormItemMap['treeSelect'] = ({ value, option, fieldNames, onChange, placeholder }) => {
	return formTreeSelect({
		value,
		option,
		fieldNames,
		onChange: onChange,
		placeholder,
		checkbox: true,
		showCheckedStrategy: SHOW_PARENT
	});
};

const TableSeach: FC<TreeSelectProps> = ({ children, onSubmit, onClose }) => {
	return (
		<Row className="p-2">
			<Col>
				<div className="w-52">{children}</div>
			</Col>
			<Col>
				<Button className="ml-2" type="default" onClick={onClose}>
					清空
				</Button>
				<Button className="ml-2" type="primary" onClick={onSubmit}>
					确定
				</Button>
			</Col>
		</Row>
	);
};

export default TableSeach;
