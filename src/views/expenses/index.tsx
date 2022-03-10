import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space } from 'antd';
import { Column } from '@antv/g2plot';
import useHeaderTable, { ItableBt } from './components/headerTable';
import { pageData } from './service';
import Itable from '@/components/iTable';
import Icard from '@/components/iCard';

const Expenses = () => {
	const buttonEvent = (type: string | number, value: ItableBt) => {
		console.log(type, value);
	};
	const char = useRef<HTMLDivElement>(null);
	const { columns } = useHeaderTable({ buttonEvent });
	useEffect(() => {
		initChar();
		getPageData();
	}, []);
	const initChar = () => {
		const data = [
			{
				type: '家具家电',
				sales: 38
			},
			{
				type: '粮油副食',
				sales: 52
			},
			{
				type: '生鲜水果',
				sales: 61
			},
			{
				type: '美容洗护',
				sales: 145
			},
			{
				type: '母婴用品',
				sales: 48
			},
			{
				type: '进口食品',
				sales: 38
			},
			{
				type: '食品饮料',
				sales: 38
			},
			{
				type: '家庭清洁',
				sales: 38
			}
		];
		const columnPlot = new Column('char', {
			data,
			xField: 'type',
			yField: 'sales',
			label: {
				// 可手动配置 label 数据标签位置
				position: 'middle', // 'top', 'bottom', 'middle',
				// 配置样式
				style: {
					fill: '#FFFFFF',
					opacity: 0.6
				}
			},
			xAxis: {
				label: {
					autoHide: true,
					autoRotate: false
				}
			},
			meta: {
				type: {
					alias: '类别'
				},
				sales: {
					alias: '销售额'
				}
			}
		});

		columnPlot.render();
	};

	//用人单位
	const getPageData = async () => {
		let res = await pageData();
		console.log(res);
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<h2>Expenses</h2>
			<Icard>
				<Itable columns={columns} data={data} />
			</Icard>

			<div id="char" ref={char}></div>
		</div>
	);
};

export default Expenses;

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: ['New York No. 1 Lake Park', '很好1'],
		tags: ['nice', 'developer']
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: ['New York No. 1 Lake Park', '很好2'],
		tags: ['loser']
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: ['New York No. 1 Lake Park', '很好3'],
		tags: ['cool', 'teacher']
	}
];
