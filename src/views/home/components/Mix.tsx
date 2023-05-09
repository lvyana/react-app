/**
 * @file 复合漏斗图
 * @author ly
 * @createDate 2023年5月9日
 */
import React, { FC, useEffect, useRef } from 'react';
import { Mix } from '@antv/g2plot';

type DemoMixProps = {
	divId: string;
};

const expectData = [
	{ value: 100, name: '展现' },
	{ value: 80, name: '点击' },
	{ value: 60, name: '访问' },
	{ value: 40, name: '咨询' },
	{ value: 30, name: '订单' }
];

const actualData = [
	{ value: 80, name: '展现' },
	{ value: 50, name: '点击' },
	{ value: 30, name: '访问' },
	{ value: 10, name: '咨询' },
	{ value: 5, name: '订单' }
];

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoMix: FC<DemoMixProps> = ({ divId = 'mix' }) => {
	const mix = useRef<Mix | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		mix.current?.destroy();
		mix.current = new Mix(divId, {
			appendPadding: [8, 40, 8, 18],
			syncViewPadding: true,
			meta: {
				value: { sync: true }
			},
			tooltip: { shared: true, showMarkers: false, showTitle: false },
			plots: [
				{
					type: 'funnel',
					options: {
						data: expectData,
						yField: 'value',
						xField: 'name',
						shape: 'pyramid',
						conversionTag: false,
						label: { position: 'right', style: { fill: 'rgba(0,0,0,0.65)' }, offsetX: 10 },
						funnelStyle: { fillOpacity: 0.85 }
					}
				},
				{
					type: 'funnel',
					options: {
						data: actualData,
						yField: 'value',
						xField: 'name',
						shape: 'pyramid',
						conversionTag: false,
						label: false,
						funnelStyle: { lineWidth: 1, stroke: '#fff' }
					}
				}
			],
			interactions: [{ type: 'element-active' }]
		});

		mix.current.render();
	};

	return <div id={divId} />;
};

export default DemoMix;
