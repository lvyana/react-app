import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@antv/g2plot';

type LineData = {
	Date: string;
	scales: number;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoLine = () => {
	const line = useRef<Line | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
			.then((response) => response.json())
			.then((json) => {
				initLine(json);
			})
			.catch((error) => {});
	};

	const initLine = (data: LineData[]) => {
		line.current?.destroy();
		line.current = new Line('lineDiv', {
			data,
			padding: 'auto',
			xField: 'Date',
			yField: 'scales',
			xAxis: {
				// type: 'timeCat',
				tickCount: 5
			}
		});

		line.current.render();
	};

	return <div id="lineDiv"></div>;
};

export default DemoLine;
