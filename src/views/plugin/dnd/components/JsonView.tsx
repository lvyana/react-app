/**
 * @name 模板
 * @user ly
 * @date
 */
import React, { FC, useContext } from 'react';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';
import { Context } from '../context';

interface JsonViewProps {
	open: boolean;
	onOkOrCancel: OnOkOrCancelType;
	confirmLoading: boolean;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const JsonView: FC<JsonViewProps> = ({ open, onOkOrCancel, confirmLoading }) => {
	const context = useContext(Context);

	const propsVal: ReactJsonViewProps = {
		name: null, // JSON数据的根节点(用默认或指定的根节点包裹自己的数据)
		src: context?.state.formList || [], // 需要展示的JSON数据
		theme: 'rjv-default', // 支持base-16主题
		iconStyle: 'circle', // circle(圆)、triangle(三角形)、square(正方形)
		indentWidth: 6, // 首行缩进长度
		collapsed: 2, // 节点折叠
		collapseStringsAfterLength: false, // 超出内容会变成…的功能
		displayDataTypes: true, // 数据类型会出现在数据的前缀值
		displayObjectSize: true // 对象和数组被标记为大
	};

	return (
		<Imodal title={'json视图'} open={open} onOkOrCancel={onOkOrCancel} confirmLoading={confirmLoading}>
			<ReactJson {...propsVal} />
		</Imodal>
	);
};

export default JsonView;
