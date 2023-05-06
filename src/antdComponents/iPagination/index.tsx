/**
 * @file 封装Paginations分页
 * @author ly
 * @createDate 2020年4月27日
 */
import React, { FC, Dispatch, SetStateAction, useMemo } from 'react';
import { Pagination } from 'antd';
import { useAppSelector } from '@/store';
import { GET_SIZE } from '@/store/reducers/layout';

/**
 * @param total 总条数
 * @param page 页码
 * @param onPaginationChange change事件回调
 */
interface IpaginationsProps {
	total?: number; // 条数
	page: React.MutableRefObject<{
		pageSize: number;
		pageNum: number;
	}>;
	onPaginationChange: (type: 'subimt') => void;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ipaginations: FC<IpaginationsProps> = ({ total, page, onPaginationChange }) => {
	const size = useAppSelector(GET_SIZE);

	const paginationSize = useMemo(() => {
		if (size === 'small') {
			return 'small';
		}
		return 'default';
	}, [size]);

	const onChange = (pageNum: number, pageSize: number) => {
		page.current = { pageSize, pageNum };
		onPaginationChange('subimt');
	};

	const { pageNum, pageSize } = page.current;
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
			size={paginationSize}
			showTotal={(total) => `总 ${total} 条`}
		/>
	);
};
export default Ipaginations;
