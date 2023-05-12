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
 * @param onPaginationChange 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
 * @param showTotal 用于显示数据总量和当前数据顺序
 * @param showSizeChanger 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
 * @param showQuickJumper 是否可以快速跳转至某页
 */
interface IpaginationsProps {
	total?: number; // 条数
	page: React.MutableRefObject<{
		pageSize: number;
		pageNum: number;
	}>;
	onPaginationChange: (type: 'subimt') => void;
	showTotal?: boolean;
	showSizeChanger?: boolean;
	showQuickJumper?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ipaginations: FC<IpaginationsProps> = ({
	total,
	page,
	onPaginationChange,
	showTotal = true,
	showSizeChanger = true,
	showQuickJumper = true,
	style,
	className
}) => {
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
			style={{ marginTop: '30px', float: 'right', ...style }}
			className={className}
			total={total}
			showSizeChanger={showSizeChanger}
			showQuickJumper={showQuickJumper}
			defaultCurrent={pageNum}
			defaultPageSize={pageSize}
			current={pageNum}
			pageSize={pageSize}
			// pageSizeOptions=[10, 20, 50, 100]
			onChange={onChange}
			size={paginationSize}
			showTotal={(total) => {
				if (showTotal) {
					return `总 ${total} 条`;
				}
			}}
		/>
	);
};
export default Ipaginations;
