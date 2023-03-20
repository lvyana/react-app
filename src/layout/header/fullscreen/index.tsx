/**
 * @file 封装全屏
 * @author ly
 * @createDate 2020年4月27日
 */
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { FullscreenOutlined, FontSizeOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import Ifullscreen from '@/pluginComponents/iFullscreen';

const Fullscreen = () => {
	return <Ifullscreen id="root"></Ifullscreen>;
};
export default Fullscreen;
