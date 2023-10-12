/**
 * @name 生成json
 * @user ly
 * @date 2023年3月13日
 */
import React, { FC, useContext, useEffect, useState } from 'react';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';
import { Context } from '../context';
import { Segmented } from 'antd';
import { useFormData } from '../useHooks';
import type { SegmentedValue } from 'antd/es/segmented';
import type { FormItemParams } from '@/antdComponents/iForm/type';

interface JsonViewProps {
	open: boolean;
	onOkOrCancel: OnOkOrCancelType;
	confirmLoading: boolean;
}

type SelectJsonType = 'dnd' | 'standard';

const JSON_OPTIONS = [
	{ label: 'dnd格式', value: 'dnd' },
	{ label: '标准格式', value: 'standard' }
];
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const JsonView: FC<JsonViewProps> = ({ open, onOkOrCancel, confirmLoading }) => {
	const context = useContext(Context);

	const { getFormData } = useFormData();

	const [jsonData, setJsonData] = useState<FormItemParams<object>[]>([]);
	useEffect(() => {
		if (open) {
			onJsonChange('dnd');
		}
	}, [open]);

	let propsVal: ReactJsonViewProps = {
		name: null, // JSON数据的根节点(用默认或指定的根节点包裹自己的数据)
		src: jsonData, // 需要展示的JSON数据
		theme: 'rjv-default', // 支持base-16主题
		iconStyle: 'circle', // circle(圆)、triangle(三角形)、square(正方形)
		indentWidth: 6, // 首行缩进长度
		collapsed: 2, // 节点折叠
		collapseStringsAfterLength: false, // 超出内容会变成…的功能
		displayDataTypes: true, // 数据类型会出现在数据的前缀值
		displayObjectSize: true // 对象和数组被标记为大
	};

	const [selectJsonType, setSelectJsonType] = useState<SelectJsonType>('dnd');

	const onJsonChange = (value: SegmentedValue) => {
		setSelectJsonType(value as SelectJsonType);
		if (value === 'standard') {
			setJsonData(
				context?.state.formList.map((item) => {
					return getFormData(item);
				}) || []
			);
		} else if (value === 'dnd') {
			setJsonData(context?.state.formList || []);
		}
	};

	return (
		<Imodal title={'json'} width={800} open={open} onOkOrCancel={onOkOrCancel} confirmLoading={confirmLoading}>
			<Segmented options={JSON_OPTIONS} value={selectJsonType} onChange={onJsonChange} />
			<ReactJson {...propsVal} />
		</Imodal>
	);
};

export default JsonView;
