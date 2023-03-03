/**
 * @file 封装全屏
 * @author ly
 * @createDate 2020年4月27日
 */
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { FullscreenOutlined, FontSizeOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';

const Fullscreen = () => {
	const ref = useRef(document.body);
	const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);

	const fullScreen = () => {
		if (isFullscreen) {
			//退出全屏
			exitFullscreen();
		} else {
			//进入全屏
			enterFullscreen();
		}
	};

	return (
		<>
			{isFullscreen ? (
				<Button type="link" onClick={fullScreen} icon={<FullscreenExitOutlined />}></Button>
			) : (
				<Button type="link" onClick={fullScreen} icon={<FullscreenOutlined />}></Button>
			)}
		</>
	);
};
export default Fullscreen;
