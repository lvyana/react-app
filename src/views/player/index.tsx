import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';

const Player = () => {
	const [playing, setplaying] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setplaying(true);
		}, 3000);
	}, []);

	return (
		<div>
			123
			<ReactPlayer
				className="react-player"
				url="https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4"
				// 设置为true或false显示本机播放器控件。◦ 对于 Vimeo 视频，视频所有者必须启用隐藏控件。
				controls={true}
				// 设置为true或false暂停或播放媒体
				playing={playing}
				// 设置为true或false循环播放媒体
				loop={true}
				// 设置为true或false启用或禁用画中画模式 ◦ 仅在某些浏览器中播放文件 URL 时可用
				pip={true}
				config={{
					youtube: {
						playerVars: { showinfo: 1 }
					},
					facebook: {
						appId: '12345'
					}
				}}
			/>
			<div style={{ height: 1000 }}></div>
		</div>
	);
};

export default Player;
