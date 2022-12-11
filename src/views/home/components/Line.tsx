import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
	const [data, setData] = useState<
		{
			Date: string;
			scales: number;
		}[]
	>([]);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {});
	};
	const config = {
		data,
		padding: 'auto' as const,
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			// type: 'timeCat',
			tickCount: 5
		}
	};

	return <Line {...config} />;
};

export default DemoLine;
