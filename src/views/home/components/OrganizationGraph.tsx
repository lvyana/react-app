import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { OrganizationGraph } from '@ant-design/graphs';
import useThemeHooks from '@/config/theme/useThemeHooks';

const DemoOrganizationGraph = () => {
	const [token] = useThemeHooks();

	const data = {
		id: 'joel',
		value: {
			name: 'Joel Alan',
			title: 'CEO',
			// 建议使用 bae64 数据
			icon: 'https://avatars.githubusercontent.com/u/31396322?v=4'
		},
		children: [
			{
				id: 'c1',
				value: {
					name: 'c1',
					title: 'CTO'
				},
				children: [
					{
						id: 'c1-1',
						value: {
							name: 'c1-1'
						}
					},
					{
						id: 'c1-2',
						value: {
							name: 'c1-2'
						},
						children: [
							{
								id: 'c1-2-1',
								value: {
									name: 'c1-2-1'
								}
							},
							{
								id: 'c1-2-2',
								value: {
									name: 'c1-2-2'
								}
							}
						]
					}
				]
			},
			{
				id: 'c2',
				value: {
					name: 'c2',
					title: 'COO'
				}
			},
			{
				id: 'c3',
				value: {
					name: 'c3',
					title: 'CFO'
				},
				children: [
					{
						id: 'c3-1',
						value: {
							name: 'c3-1'
						}
					},
					{
						id: 'c3-2',
						value: {
							name: 'c3-2'
						},
						children: [
							{
								id: 'c3-2-1',
								value: {
									name: 'c3-2-1'
								}
							},
							{
								id: 'c3-2-2',
								value: {
									name: 'c3-2-2'
								}
							},
							{
								id: 'c3-2-3',
								value: {
									name: 'c3-2-3'
								}
							}
						]
					},
					{
						id: 'c3-3',
						value: {
							name: 'c3-3'
						}
					}
				]
			}
		]
	};

	return (
		<div>
			<OrganizationGraph
				data={data}
				style={{ backgroundColor: token.colorBgBase }}
				nodeCfg={{
					style: (node: any) => {
						return node.id === 'joel'
							? {
									fill: '#91d5ff',
									stroke: '#91d5ff'
							  }
							: {};
					},
					label: {
						style: (node: any, group, type) => {
							const styles = {
								icon: {
									width: 32,
									height: 32
								},
								title: {
									fill: '#fff'
								},
								name: {
									fill: '#fff'
								}
							};
							return node.id === 'joel' ? styles[type as 'icon' | 'title' | 'name'] : {};
						}
					}
				}}
				behaviors={[]}
				autoFit={true}
			/>
		</div>
	);
};

export default DemoOrganizationGraph;
