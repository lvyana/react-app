/**
 * @file 水波图
 * @author ly
 * @createDate 2023年5月9日
 */
import React, { FC, useEffect, useRef } from 'react';
import { Liquid } from '@antv/g2plot';

type DemoLiquidProps = {
	divId: string;
};

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const DemoLiquid: FC<DemoLiquidProps> = ({ divId = 'liquid' }) => {
	const liquid = useRef<Liquid | null>(null);

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = () => {
		liquid.current?.destroy();
		liquid.current = new Liquid(divId, {
			percent: 0.25,
			outline: {
				border: 4,
				distance: 8
			},
			wave: {
				length: 128
			}
		});

		liquid.current.render();
	};

	return <div id={divId} />;
};

export default DemoLiquid;
