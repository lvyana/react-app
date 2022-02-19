import React, { Dispatch, SetStateAction } from 'react';
import { Pagination } from 'antd';
interface Pagination {
	total?: number; // 条数
	pageNum: number;
	pageSize: number;
	setPageSize: Dispatch<SetStateAction<number>>;
	setPageNum: Dispatch<SetStateAction<number>>;
}
const Paginations = ({ total, pageNum, setPageSize, pageSize, setPageNum }: Pagination) => {
	const onChange = (page: number, pageSize: number | undefined) => {
		console.log(page, pageSize);
		setPageSize(pageSize as number);
		setPageNum(page);
	};
	return (
		<Pagination
			style={{ marginTop: '30px', float: 'right' }}
			total={total}
			showSizeChanger
			showQuickJumper
			defaultCurrent={pageNum}
			defaultPageSize={pageSize}
			current={pageNum}
			pageSize={pageSize}
			// pageSizeOptions=[10, 20, 50, 100]
			onChange={onChange}
			showTotal={(total) => `总 ${total} 条`}
		/>
	);
};
export default Paginations;
