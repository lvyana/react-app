import React, { useState, useEffect, useRef } from 'react';
import { Area } from '@antv/g2plot';

const DemoArea = () => {
	const area = useRef<Area | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
			.then((res) => res.json())
			.then((data) => {
				area.current?.destroy();
				area.current = new Area('area', {
					data,
					xField: 'timePeriod',
					yField: 'value',
					xAxis: {
						range: [0, 1]
					}
				});
				area.current.render();
			});
	};

	return <div id="area" />;
};

export default DemoArea;
