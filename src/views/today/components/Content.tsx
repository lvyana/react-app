/**
 * @name 展示内容
 * @use ly
 * @date 2022年11月6日
 */
import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Badge, List, Space, Tooltip } from 'antd';

const Content = () => {
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
							<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
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

						<div className="bg-blue-100 mb-2 flex justify-between px-2">
							<div>1、sdfsdf</div>
							<div>
								<span className="mr-4">ly</span> 90%
							</div>
						</div>
						<div className="bg-blue-100 mb-2 flex justify-between px-2">
							<div>1、sdfsdf</div>
							<div>
								<span className="mr-4">ly</span> 90%
							</div>
						</div>
						<div className="bg-blue-100 mb-2 flex justify-between px-2">
							<div>1、sdfsdf</div>
							<div>
								<span className="mr-4">ly</span> 90%
							</div>
						</div>
						<div className="bg-blue-100 mb-2 flex justify-between px-2">
							<div>1、sdfsdf</div>
							<div>
								<span className="mr-4">ly</span> 90%
							</div>
						</div>
					</List.Item>
				)}
			/>
		</div>
	);
};

const data = Array.from({ length: 5 }).map((_, i) => ({
	title: `标题 ${i}`,
	avatar: 'https://joeschmoe.io/api/v1/random',
	description: '某某 某某, 时间',
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
}));

const IconText = ({ icon, text, isTooltip = false }: { icon: React.FC; text: string; isTooltip?: boolean }) => (
	<Space className="hover:text-black cursor-pointer">
		{isTooltip ? (
			<Tooltip title="某某1、某某2">
				<div>
					{React.createElement(icon)}
					{text}
				</div>
			</Tooltip>
		) : (
			<div>
				{React.createElement(icon)}
				{text}
			</div>
		)}
	</Space>
);

export default Content;
