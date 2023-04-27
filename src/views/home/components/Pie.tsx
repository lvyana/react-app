import React, { useState, useEffect, useRef } from 'react';
import { Pie } from '@antv/g2plot';

const data = [
	{
		type: '分类一',
		value: 27
	},
	{
		type: '分类二',
		value: 25
	},
	{
		type: '分类三',
		value: 18
	},
	{
		type: '分类四',
		value: 15
	},
	{
		type: '分类五',
		value: 10
	},
	{
		type: '其他',
		value: 5
	}
];

const DemoPie = () => {
	const piePlot = useRef<Pie | null>(null);

	useEffect(() => {
		initPie();
	}, []);

	const initPie = () => {
		piePlot.current?.destroy();
		piePlot.current = new Pie('piePlot', {
			appendPadding: 10,
			data,
			angleField: 'value',
			colorField: 'type',
			radius: 0.9,
			label: {
				type: 'inner',
				offset: '-30%',
				content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
				style: {
					fontSize: 14,
					textAlign: 'center'
				}
			},
			interactions: [{ type: 'element-active' }]
		});

		piePlot.current.render();
	};
	return <div id="piePlot" />;
};

export default DemoPie;
