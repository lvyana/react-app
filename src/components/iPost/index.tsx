import React, { FC, useState } from 'react';
import ILookModal from '@/components/iLookModal';
import Itable from '@/components/iTable';
import useHeaderTable from './components/headerTable';

/**
 * 岗位公用组件
 * id 调用接口
 * visible 弹框开关
 */
interface Iprops {
	id: number | string;
	visible: boolean;
}
const Ipost: FC<Iprops> = ({ id, visible }) => {
	const [title, setTitle] = useState('');
	const [tableLoading, setTableLoading] = useState(false);
	const getTaableData = () => {};
	const { columns } = useHeaderTable({ getTaableData });

	return (
		<div>
			<ILookModal visible={visible} title={title}>
				<Itable rowKey={'interviewerId'} columns={columns} data={data} loading={tableLoading} />
			</ILookModal>
		</div>
	);
};

export default Ipost;
const data = [{}];
