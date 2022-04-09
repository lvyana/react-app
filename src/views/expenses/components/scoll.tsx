import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import getKey from '@/utils/onlyKey';

const InfiniteListExample = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any>([]);

	const loadMoreData = () => {
		if (loading) {
			return;
		}
		setLoading(true);
		fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
			.then((res) => res.json())
			.then((body) => {
				setData([...data, ...body.results]);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		loadMoreData();
		return () => {
			loadMoreData();
		};
	}, []);

	return (
		<div
			id="scrollableDiv"
			style={{
				height: 400,
				overflow: 'auto',
				padding: '0 16px',
				border: '1px solid rgba(140, 140, 140, 0.35)'
			}}>
			<InfiniteScroll
				dataLength={data.length}
				next={loadMoreData}
				hasMore={data.length < 50}
				loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
				endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
				scrollableTarget="scrollableDiv">
				<div>
					{data.map((item: any) => (
						<div style={{ height: '40px' }} key={getKey()}>
							item
						</div>
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
};

export default InfiniteListExample;
