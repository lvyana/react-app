/**
 * @file 仪表盘
 * @author ly
 * @createDate 2023年5月9日
 */
import React, { FC, useEffect, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

type DemoGaugeProps = {
	divId: string;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoGauge: FC<DemoGaugeProps> = ({ divId = 'gauge' }) => {
	const area = useRef<Gauge | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		area.current?.destroy();
		area.current = new Gauge(divId, {
			percent: 0.75,
			range: {
				color: 'l(0) 0:#B8E1FF 1:#3D76DD'
			},
			startAngle: Math.PI,
			endAngle: 2 * Math.PI,
			indicator: undefined,
			statistic: {
				title: {
					offsetY: -36,
					style: {
						fontSize: '36px',
						color: '#4B535E'
					},
					formatter: () => '70%'
				},
				content: {
					style: {
						fontSize: '24px',
						lineHeight: '44px',
						color: '#4B535E'
					},
					formatter: () => '加载进度'
				}
			}
		});

		area.current.render();
	};

	return <div id={divId} />;
};

export default DemoGauge;
