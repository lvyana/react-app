import React, { FC, useState, ReactNode } from 'react';
import { Avatar, Descriptions, Row, Col, Button, message, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '@/components/loading';
import styles from './index.module.less';

/**
 * 滚动加载
 * current 当前数据长度
 * total 总条数
 * loading 下面加载效果
 * setLoading 控制下面加载效果
 * height 盒子高度
 * loadMoreDataApi 获取数据方法
 *
 */
interface Iprops {
	children: ReactNode;
	height: number;
	current: number;
	total: number;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	loadMoreDataApi: () => void;
}
const IinfiniteScroll: FC<Iprops> = ({ children, current, total, loading, setLoading, height, loadMoreDataApi }) => {
	// 懒加载
	const loadMoreData = () => {
		if (loading) {
			return;
		}
		setLoading(true);
		loadMoreDataApi();
	};
	return (
		<div
			id="scrollableDiv"
			className={styles.scrollableDiv}
			style={{
				height: height
			}}>
			<InfiniteScroll
				dataLength={current}
				next={loadMoreData}
				hasMore={current < total}
				loader={<Loading loading={loading}></Loading>}
				endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
				scrollableTarget="scrollableDiv">
				{children}
			</InfiniteScroll>
		</div>
	);
};

export default IinfiniteScroll;
