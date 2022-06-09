import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { FullscreenOutlined, FontSizeOutlined, FullscreenExitOutlined } from '@ant-design/icons';

const Fullscreen = () => {
	// 全屏
	const [isFullScreen, setIsFullScreen] = useState(false);
	const fullScreen = () => {
		if (!isFullScreen) {
			requestFullScreen();
		} else {
			exitFullscreen();
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
	const exitFullscreen = () => {
		let de: any = document;
		if (de.exitFullScreen) {
			de.exitFullScreen();
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
		let de: any = document;
		document.addEventListener(
			'fullscreenchange',
			function () {
				console.log(11);
				let FullScreen = de.fullScreen || de.mozFullScreen || de.webkitIsFullScreen;
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
