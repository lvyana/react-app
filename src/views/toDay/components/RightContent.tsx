/**
 * @name 展示内容
 * @use ly
 * @date 2022年11月6日
 */
import React, { useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Badge, List, Progress, Space, Tooltip } from 'antd';
import Commoent from './Comment';

const RightContent = () => {
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

	return (
		<div>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={data}
				footer={<></>}
				renderItem={(item) => (
					<List.Item
						className="hover:bg-blue-300 cursor-pointer"
						key={item.title}
						actions={[
							<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
							<IconText icon={LikeOutlined} isTooltip={true} text="156" key="list-vertical-like-o" />,
							<IconText icon={MessageOutlined} text="2" key="list-vertical-message" onIcon={onIcon} />
						]}
						extra={<img className="w-56 mt-16" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
						<List.Item.Meta
							avatar={
								<div>
									<Badge className="text-xs" status="processing" />
								</div>
							}
							title={<>{item.title}</>}
							description={item.description}
						/>

						<div className="bg-blue-100 mb-2 flex justify-between px-2 p-2">
							<div>1、</div>
							<div className="flex-1">
								是的是的多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多所多
							</div>
							<div className="w-16 text-center">
								<span className="mr-4">ly</span>
								<span>
									<Progress
										type="circle"
										strokeColor={{
											'0%': '#108ee9',
											'100%': '#87d068'
										}}
										width={30}
										percent={90}
									/>
								</span>
							</div>
						</div>
					</List.Item>
				)}
			/>
			<Commoent openComment={openComment} loadingComment={loadingComment} onOkOrCancel={onCommoentOkOrCancel} />
		</div>
	);
};

const data = Array.from({ length: 5 }).map((_, i) => ({
	title: `标题 ${i}`,
	avatar: 'https://joeschmoe.io/api/v1/random',
	description: (
		<div className="flex justify-between">
			<div>某某 某某</div>
			<div>2022年11月10日</div>
		</div>
	),
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
}));
const IconText = ({
	icon,
	text,
	isTooltip = false,
	onIcon
}: {
	icon: React.FC;
	text: string;
	isTooltip?: boolean;
	onIcon?: () => void;
}) => (
	<Space className="hover:text-black cursor-pointer">
		{isTooltip ? (
			<Tooltip title="某某1、某某2">
				<div>
					{React.createElement(icon)}
					{text}
				</div>
			</Tooltip>
		) : (
			<div onClick={onIcon}>
				{React.createElement(icon)}
				{text}
			</div>
		)}
	</Space>
);

export default RightContent;
