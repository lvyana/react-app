/**
 * @file 全屏
 * @author ly
 * @createDate
 */
import React, { FC, useRef } from 'react';
import { useFullscreen } from 'ahooks';
import { Button } from 'antd';
import { FullscreenOutlined, FontSizeOutlined, FullscreenExitOutlined } from '@ant-design/icons';

type FullscreenIprops = {
	id: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Ifullscreen: FC<FullscreenIprops> = ({ id }) => {
	const el = useRef(document.getElementById(id));
	const [isFullscreen, { enterFullscreen, exitFullscreen }] = useFullscreen(el);

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

export default Ifullscreen;
