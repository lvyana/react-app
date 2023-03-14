/**
 * @file 生成代码
 * @author ly
 * @createDate 2023年3月13日
 */
import React, { FC, useContext } from 'react';
import Imodal, { OnOkOrCancelType } from '@/antdComponents/iModal';
import { Context } from '../context';
import Icard from '@/antdComponents/iCard';
import { useFormData } from '../useHooks';

type GeneratCodeProps = {
	open: boolean;
	onOkOrCancel: OnOkOrCancelType;
	confirmLoading: boolean;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const GeneratCode: FC<GeneratCodeProps> = ({ open, onOkOrCancel, confirmLoading }) => {
	const context = useContext(Context);

	const { getFormData } = useFormData();

	return (
		<Imodal width={1000} title={'导入dnd-json'} open={open} onOkOrCancel={onOkOrCancel} confirmLoading={confirmLoading}>
			<Icard bordered={true}>
				<div>{`import React, {FC} from 'react';`}</div>
				<div className="mb-2">{`import Iform from '@/antdComponents/iForm';`}</div>

				<div className="mb-1 whitespace-pre">{`const SeachForm: FC<Iprops> = ({ form, onFinish }) => {`}</div>
				<div style={{ whiteSpace: 'pre-line' }} className="mb-1 whitespace-pre">
					{'  const formList = ' +
						JSON.stringify(
							context?.state.formList.map((item) => {
								return getFormData(item);
							}) || [],
							null,
							2
						)}
				</div>
				<div className="mb-1 whitespace-pre">{`  return <Iform form={form} formList={formList}></Iform>;`}</div>
				<div className="mb-1 whitespace-pre">{`};`}</div>
			</Icard>
		</Imodal>
	);
};

export default GeneratCode;
