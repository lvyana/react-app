import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space } from 'antd';
import { Column } from '@antv/g2plot';
import useHeaderTable, { ItableBt } from './components/headerTable';
import { pageData } from './service';
import Itable from '@/components/iTable';

const Expenses = () => {
	const buttonEvent = (value: ItableBt) => {
		console.log(value);
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
		<div>
			<h2>Expenses</h2>
			<Itable columns={columns} data={data} />
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
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer']
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser']
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher']
	}
];
