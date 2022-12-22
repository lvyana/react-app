import React, { useState } from 'react';
import Itable from '@/antdComponents/iTable';
import { useRequest } from 'ahooks';
import useHeaderTable from './components/useTable';
import { tabelData, TabelDataResponse } from './service';

const MessgeCenter = () => {
	const buttonEvent = () => {};

	const { columns } = useHeaderTable({ buttonEvent });

	const [backlogData, setbacklogData] = useState<TabelDataResponse[]>([]);

	const {} = useRequest(tabelData, {
		onSuccess: (res) => {
			// console.log(res);
			setbacklogData(res.data);
		}
	});
	return (
		<div>
			<Itable columns={columns} data={backlogData}></Itable>
		</div>
	);
};

export default MessgeCenter;
