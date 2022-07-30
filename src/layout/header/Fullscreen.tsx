/**
 *	@name 实现全屏
 *	@user ly
 *  @data 日期：2020年4月27日
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { FullscreenOutlined, FontSizeOutlined, FullscreenExitOutlined } from '@ant-design/icons';

const Fullscreen = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const fullScreen = () => {
		if (!isFullScreen) {
			requestFullScreen();
		} else {
			exitFullScreen();
		}
	};

	//进入全屏
	const requestFullScreen = () => {
		let de: any;
		de = document.documentElement;
		if (de.requestFullscreen) {
			de.requestFullscreen();
		} else if (de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		} else if (de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
		setIsFullScreen(true);
	};

	//退出全屏
	const exitFullScreen = () => {
		const de: any = document;
		if (de.exitFullscreen) {
			de.exitFullscreen();
		} else if (de.mozCancelFullScreen) {
			de.mozCancelFullScreen();
		} else if (de.webkitExitFullscreen) {
			de.webkitExitFullscreen();
		} else if (de.msExitFullscreen) {
			de.msExitFullscreen();
		}

		setIsFullScreen(false);
	};
	useEffect(() => {
		watchFullScreen();
	}, []);

	//监听fullscreenchange事件
	const watchFullScreen = () => {
		const de: any = document;
		document.addEventListener(
			'fullscreenchange',
			() => {
				const FullScreen = de.fullScreen || de.mozFullScreen || de.webkitIsFullScreen;
				if (FullScreen) {
					//  进入全屏
				} else {
					//  退出全屏
					setIsFullScreen(false);
				}
			},
			false
		);
	};
	return (
		<>
			{isFullScreen ? (
				<Button type="link" onClick={fullScreen} icon={<FullscreenExitOutlined />}></Button>
			) : (
				<Button type="link" onClick={fullScreen} icon={<FullscreenOutlined />}></Button>
			)}
		</>
	);
};
export default Fullscreen;
