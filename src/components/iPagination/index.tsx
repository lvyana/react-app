/**
 *	@name 实现Paginations分页
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { FC, Dispatch, SetStateAction } from 'react';
import { Pagination } from 'antd';

/**
 * @param total 总条数
 * @param pageNum 第几页
 * @param setPageNum 更新pageNum
 * @param pageSize 一页显示多少条
 * @param setPageSize 更新pageSize
 */
interface IpaginationsProps {
	total?: number; // 条数
	pageNum: number;
	pageSize: number;
	setPageSize: Dispatch<SetStateAction<number>>;
	setPageNum: Dispatch<SetStateAction<number>>;
}

const Ipaginations: FC<IpaginationsProps> = ({ total, pageNum, setPageSize, pageSize, setPageNum }) => {
	const onChange = (page: number, pageSize: number | undefined) => {
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
export default Ipaginations;
