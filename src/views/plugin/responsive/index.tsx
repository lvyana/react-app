/**
 * @file 响应式 https://github.com/yocontra/react-responsive
 * @author ly
 * @createDate 2023年1月3日
 */
import React from 'react';
import { IresponsiveMax, IresponsiveMin } from '@/pluginComponents/iResponsive';

const Responsive = () => {
	return (
		<div>
			<IresponsiveMax MaxWidth={1000}>
				<div>大于1000 隐藏</div>
			</IresponsiveMax>
			<IresponsiveMin MinWidth={900}>
				<div>小于900 隐藏</div>
			</IresponsiveMin>
		</div>
	);
};

export default Responsive;
