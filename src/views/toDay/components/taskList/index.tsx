/**
 * @name 展示内容
 * @use ly
 * @date 2022年11月6日
 */
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Image, Badge, List, Progress, Skeleton, Space, Tag, Tooltip } from 'antd';
import Commoent from './Comment';
import { toDayContext } from '../../context';

export interface TaskListParams {
	title: string;
	avatar: string;
	description: { names: string[]; date: string };
	content: { index: string; title: string; name: string; accomplish: number; avatars: string[] }[];
	collectNum: number;
	isCollect: boolean;
	likeNum: number;
	isLike: boolean;
	likeNames: string[];
	isComment: boolean;
	commentNum: number;
	key: string;
}
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const TaskList = () => {
	const toDay = useContext(toDayContext);

	const [openComment, setOpenComment] = useState(false);
	const [loadingComment, setLoadingComment] = useState(false);
	const onIcon = () => {
		setOpenComment(true);
	};

	const onCommoentOkOrCancel = (type: string) => {
		if (type === 'ok') {
			setOpenComment(false);
		} else if (type === 'cancel') {
			setOpenComment(false);
		}
	};

	// const [contentLoading, setContentLoading] = useState(false);

	return (
		<div>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={toDay?.state.taskListData}
				footer={<></>}
				// locale={{ emptyText: ' ' }}
				renderItem={(item) => (
					<Skeleton loading={toDay?.state.taskListLoading} active avatar>
						<List.Item
							className="hover:bg-blue-300 rounded-lg"
							key={item.key}
							actions={[
								<IconText
									icon={StarOutlined}
									className={item.isCollect ? 'text-blue-900' : ''}
									text={item.collectNum}
									key="list-vertical-star-o"
								/>,
								<IconText
									icon={LikeOutlined}
									isTooltip={true}
									className={item.isLike ? 'text-blue-900' : ''}
									text={item.likeNum}
									likeNames={item.likeNames}
									key="list-vertical-like-o"
								/>,
								<IconText
									icon={MessageOutlined}
									className={item.isComment ? 'text-blue-900' : ''}
									text={item.commentNum}
									key="list-vertical-message"
									onIcon={onIcon}
								/>
							]}
							extra={
								<div className="mt-16">
									<Image className="w-56 " src={item.avatar} placeholder={<Image preview={false} src={item.avatar} className="w-56 " />} />
								</div>
							}>
							<List.Item.Meta
								avatar={<Badge className="text-xs" status="processing" />}
								title={<>{item.title}</>}
								description={
									<div className="flex justify-between">
										<div>{item.description.names.join('、')}</div>
										<div>{item.description.date}</div>
									</div>
								}
							/>

							{item.content.map((content) => {
								return (
									<div className="mb-2" key={content.index}>
										<div className="bg-blue-100 mb-2 flex justify-between px-2 p-2 rounded-lg">
											<div>{content.index}、</div>
											<div className="flex-1">{content.title}</div>
											<div className="w-24 text-center">
												<span className="mr-1">
													<Tag color="#3b79d0">{content.name}</Tag>
												</span>
												<span>
													<Progress
														type="circle"
														strokeColor={{
															'0%': '#108ee9',
															'100%': '#87d068'
														}}
														width={30}
														percent={content.accomplish}
													/>
												</span>
											</div>
										</div>
										<div className="flex justify-start">
											<Image.PreviewGroup>
												{content.avatars.map((avatar, i) => {
													return (
														<div key={i} className="mr-2">
															<Image className="w-28" src={avatar} placeholder={<Image preview={false} src={avatar} />} />
														</div>
													);
												})}
											</Image.PreviewGroup>
										</div>
									</div>
								);
							})}
						</List.Item>
					</Skeleton>
				)}
			/>

			<Commoent openComment={openComment} loadingComment={loadingComment} onOkOrCancel={onCommoentOkOrCancel} />
		</div>
	);
};

const IconText = ({
	icon,
	text,
	isTooltip = false,
	onIcon,
	className,
	likeNames
}: {
	icon: React.FC<{ className?: string }>;
	text: number;
	isTooltip?: boolean;
	likeNames?: string[];
	onIcon?: () => void;
	className?: string;
}) => (
	<Space className="hover:text-blue-900 hover:font-bold cursor-pointer ">
		{isTooltip ? (
			<Tooltip title={likeNames?.join('、')}>
				<div className="w-16">
					{React.createElement(icon, { className })}
					{text}
				</div>
			</Tooltip>
		) : (
			<div onClick={onIcon} className="w-16">
				{React.createElement(icon, { className })}
				{text}
			</div>
		)}
	</Space>
);

export default TaskList;
