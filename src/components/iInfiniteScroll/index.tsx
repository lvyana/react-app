import React, { FC, useState, ReactNode } from 'react';
import { Avatar, Descriptions, Row, Col, Button, message, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '@/components/loading';
import styles from './index.module.less';

/**
 * @name 滚动加载
 * @param current 当前数据长度
 * @param total 总条数
 * @param loading 下面加载效果
 * @param setLoading 控制下面加载效果
 * @param height 盒子高度
 * @param loadMoreDataApi 获取数据方法
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

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

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
