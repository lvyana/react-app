/**
 * @file 词云图-每次渲染保持位置不变
 * @author ly
 * @createDate 2023年5月9日
 */
import React, { FC, useEffect, useRef } from 'react';
import { WordCloud } from '@antv/g2plot';

type DemoWordCloudProps = {
	divId: string;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoWordCloud: FC<DemoWordCloudProps> = ({ divId = 'WordCloud' }) => {
	const wordCloud = useRef<WordCloud | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		wordCloud.current?.destroy();
		fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
			.then((res) => res.json())
			.then((data) => {
				wordCloud.current = new WordCloud(divId, {
					data,
					wordField: 'name',
					weightField: 'value',
					colorField: 'name',
					wordStyle: {
						fontFamily: 'Verdana',
						fontSize: [8, 32],
						rotation: 0
					},
					// 返回值设置成一个 [0, 1) 区间内的值，
					// 可以让每次渲染的位置相同（前提是每次的宽高一致）。
					random: () => 0.5
				});

				wordCloud.current.render();
			});
	};

	return <div id={divId} />;
};

export default DemoWordCloud;
